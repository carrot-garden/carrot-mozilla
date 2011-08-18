
366 nsresult nsMsgSearchOfflineMail::ConstructExpressionTree(nsISupportsArray * termList,
367                                             PRUint32 termCount,
368                                             PRUint32 &aStartPosInList,
369                                             nsMsgSearchBoolExpression ** aExpressionTree)
370 {
371   nsMsgSearchBoolExpression * finalExpression = *aExpressionTree;
372 
373   if (!finalExpression)
374     finalExpression = new nsMsgSearchBoolExpression(); 
375 
376   while (aStartPosInList < termCount)
377   {
378       nsCOMPtr<nsIMsgSearchTerm> pTerm;
379       termList->QueryElementAt(aStartPosInList, NS_GET_IID(nsIMsgSearchTerm), (void **)getter_AddRefs(pTerm));
380       NS_ASSERTION (pTerm, "couldn't get term to match");
381 
382       PRBool beginsGrouping;
383       PRBool endsGrouping;
384       pTerm->GetBeginsGrouping(&beginsGrouping);
385       pTerm->GetEndsGrouping(&endsGrouping);
386 
387       if (beginsGrouping)
388       {
389           //temporarily turn off the grouping for our recursive call
390           pTerm->SetBeginsGrouping(PR_FALSE); 
391           nsMsgSearchBoolExpression * innerExpression = new nsMsgSearchBoolExpression(); 
392 
393           // the first search term in the grouping is the one that holds the operator for how this search term
394           // should be joined with the expressions to it's left. 
395           PRBool booleanAnd;
396           pTerm->GetBooleanAnd(&booleanAnd);
397 
398           // now add this expression tree to our overall expression tree...
399           finalExpression = nsMsgSearchBoolExpression::AddExpressionTree(finalExpression, innerExpression, booleanAnd);
400 
401           // recursively process this inner expression
402           ConstructExpressionTree(termList, termCount, aStartPosInList, 
403             &finalExpression->m_rightChild);
404 
405           // undo our damage
406           pTerm->SetBeginsGrouping(PR_TRUE); 
407 
408       }
409       else
410       {
411         finalExpression = nsMsgSearchBoolExpression::AddSearchTerm(finalExpression, pTerm, nsnull);    // add the term to the expression tree
412 
413         if (endsGrouping)
414           break;
415       }
416 
417       aStartPosInList++;
418   } // while we still have terms to process in this group
419 
420   *aExpressionTree = finalExpression;
421 
422   return NS_OK; 
423 }


159 // returns PR_TRUE or PR_FALSE depending on what the current expression evaluates to. 
160 PRBool nsMsgSearchBoolExpression::OfflineEvaluate(nsIMsgDBHdr *msgToMatch, const char *defaultCharset,
161   nsIMsgSearchScopeTerm *scope, nsIMsgDatabase *db, const char *headers,
162   PRUint32 headerSize, PRBool Filtering)
163 {
164     PRBool result = PR_TRUE;    // always default to false positives
165     PRBool isAnd;
166 
167     if (m_term) // do we contain just a search term?
168     {
169       nsMsgSearchOfflineMail::ProcessSearchTerm(msgToMatch, m_term,
170         defaultCharset, scope, db, headers, headerSize, Filtering, &result);
171       return result;
172     }
173     
174     // otherwise we must recursively determine the value of our sub expressions
175 
176     isAnd = (m_boolOp == nsMsgSearchBooleanOp::BooleanAND);
177 
178     if (m_leftChild)
179     {
180         result = m_leftChild->OfflineEvaluate(msgToMatch, defaultCharset,
181           scope, db, headers, headerSize, Filtering);
182         // If (TRUE and OR) or (FALSE and AND) return result
183         if (result ^ isAnd)
184           return result;
185     }
186 
187     // If we got this far, either there was no leftChild (which is impossible)
188     // or we got (FALSE and OR) or (TRUE and AND) from the first result. That
189     // means the outcome depends entirely on the rightChild.
190     if (m_rightChild)
191         result = m_rightChild->OfflineEvaluate(msgToMatch, defaultCharset,
192           scope, db, headers, headerSize, Filtering);
193 
194     return result;
195 }

