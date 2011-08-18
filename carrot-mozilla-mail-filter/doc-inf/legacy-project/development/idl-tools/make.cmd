rem //	compile with xpidl
rem //	xpidl -m typelib -w -v -I C:\mnt\TEMP\development\gecko-sdk\idl -o cgICarrotGarden C:\mnt\TEMP\development\gecko-sdk\idl\nsISimple.idl


set EXT_DIR=C:\tb\extensions\{8a4b2ec4-400b-11db-964b-00e08161165f}

set IDL_DIR=%EXT_DIR%\development\idl-tools

set NAM=carrot_garden

set IDL_LIB=%IDL_DIR%\idl
set IDL_EXE=%IDL_DIR%\exe

set IDL_SRC=%IDL_DIR%\%NAM%.idl
set IDL_OUT=%IDL_DIR%\%NAM%

%IDL_EXE%\xpidl.exe -m typelib -w -v -I %IDL_LIB% -o %IDL_OUT% %IDL_SRC% > %IDL_DIR%\make.log

set PROFILE_DIR=C:\tb
rem del %PROFILE_DIR%\xpti.dat
rem del %PROFILE_DIR%\compreg.dat

copy %IDL_OUT%.xpt %EXT_DIR%\components

copy %IDL_OUT%.xpt %PROFILE_DIR%\.autoreg

rem pause
