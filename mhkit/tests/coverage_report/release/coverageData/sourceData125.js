var sourceData125 = {"FileName":"/Users/asimms/Desktop/Programming/mhkit_matlab_simms_dev/MHKiT-MATLAB-2/mhkit/utils/nc_file_precheck.m","RawFileContents":["function nc_file_precheck(filename)","%%%%%%%%%%%%%%%%%%%%","%     Check NetCDF filename before working on it","%","% Parameters","% ------------","%   filename: string","%       Filename of NetCDF file to read.","% Returns","% ---------","%   No return.","%","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","    % check to see if the filename input is a string","    if ~ischar(filename) && ~isstring(filename)","        ME = MException('MATLAB:nc_file_precheck',['filename must be a ' ...","            'character string']);","        throw(ME);","    % check to see if the file exists","    elseif ~isfile(filename)","        ME = MException('MATLAB:nc_file_precheck','file does not exist');","        throw(ME);","    % check MATLAB version & if it is h5 file","    elseif isMATLABReleaseOlderThan(\"R2021b\") || ...","            endsWith(filename, \".h5\")","        %ds = read_h5(filename);","        % return","        ME = MException('MATLAB:nc_file_precheck','please use read_h5');","        throw(ME);","    end","","end","",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":18,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false},"Statement":[{"LineNumber":15,"Hits":18,"StartColumnNumbers":4,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":16,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":72,"ContinuedLine":false},{"LineNumber":17,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":33,"ContinuedLine":true},{"LineNumber":18,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":20,"Hits":18,"StartColumnNumbers":4,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":21,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":73,"ContinuedLine":false},{"LineNumber":22,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":24,"Hits":18,"StartColumnNumbers":4,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":25,"Hits":18,"StartColumnNumbers":12,"EndColumnNumbers":37,"ContinuedLine":true},{"LineNumber":28,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":72,"ContinuedLine":false},{"LineNumber":29,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":18,"ContinuedLine":false}]}}