var sourceData109 = {"FileName":"/Users/asimms/Desktop/Programming/mhkit_matlab_simms_dev/MHKiT-MATLAB/mhkit/tests/Python_Import.m","RawFileContents":["% Unit tests for importing Python modules in MATLAB","classdef Python_Import < matlab.unittest.TestCase","","    methods (Test)","","        % Test importing 'mhkit' Python module","        function test_mhkit_import(testCase)","            py.importlib.import_module('mhkit');","            assertTrue(testCase, true);","        end","","        % Test importing 'pandas' Python module","        function test_pandas_import(testCase)","            py.importlib.import_module('pandas');","            assertTrue(testCase, true);","        end","","        % Test importing 'h5py' Python module","        function test_h5py_import(testCase)","            py.importlib.import_module('h5py');","            assertTrue(testCase, true);","        end","","        % Verify output of the 'circular' function from 'mhkit'","        function verify_mhkit_output(testCase)","            py.importlib.import_module('mhkit');","            [x, y] = circular(30);","","            expected_x = 30;","            expected_y = 706.8583;","","            y_variance = abs(y - expected_y);","","            assertEqual(testCase, x, expected_x);","            assertLessThan(testCase, y_variance, 0.01);","        end","","        % Verify output of the 'circular' function from 'mhkit'","        function verify_mhkit_output_without_importing_module(testCase)","            % py.importlib.import_module('mhkit');","            [x, y] = circular(30);","","            expected_x = 30;","            expected_y = 706.8583;","","            y_variance = abs(y - expected_y);","","            assertEqual(testCase, x, expected_x);","            assertLessThan(testCase, y_variance, 0.01);","        end","","    end","","end","",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":7,"Hits":1,"StartColumnNumbers":8,"EndColumnNumbers":44,"ContinuedLine":false},{"LineNumber":13,"Hits":1,"StartColumnNumbers":8,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":19,"Hits":1,"StartColumnNumbers":8,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":25,"Hits":1,"StartColumnNumbers":8,"EndColumnNumbers":46,"ContinuedLine":false},{"LineNumber":39,"Hits":1,"StartColumnNumbers":8,"EndColumnNumbers":71,"ContinuedLine":false}],"Statement":[{"LineNumber":8,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":9,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":14,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":15,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":20,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":21,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":26,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":27,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":29,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":30,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":32,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":34,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":35,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":55,"ContinuedLine":false},{"LineNumber":41,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":43,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":44,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":46,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":48,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":49,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":55,"ContinuedLine":false}]}}