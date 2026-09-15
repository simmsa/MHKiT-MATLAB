function results = runMatlabOnlyTests()
% runMatlabOnlyTests Run the unit tests that do not call Python or MHKiT-Python
%
%   results = runMatlabOnlyTests() returns a matlab.unittest.TestResult array.

    import matlab.unittest.TestSuite
    import matlab.unittest.Test
    import matlab.unittest.TestRunner
    import matlab.unittest.selectors.HasName
    import matlab.unittest.constraints.ContainsSubstring

    testsFolder = fileparts(mfilename('fullpath'));
    repoRoot = fileparts(fileparts(testsFolder));
    addpath(genpath(fullfile(repoRoot, 'mhkit')));

    % Test files where every test is native MATLAB.
    nativeTestFiles = { ...
        'Acoustics_TestAnalysis.m', ...
        'Acoustics_TestIO.m', ...
        'Acoustics_TestMetrics.m', ...
        'Dolfyn_TestIO.m', ...
        'Dolfyn_Test_Analysis_Workflow.m', ...
        'Dolfyn_Test_Average.m', ...
        'Dolfyn_Test_Orient.m', ...
        'Dolfyn_Test_Rotate.m', ...
        'Dolfyn_Test_VAP.m', ...
        'Mooring_TestMooring.m', ...
        'Tidal_TestIO.m', ...
        'upcrossing_Test.m', ...
    };

    suite = Test.empty();
    for i = 1:numel(nativeTestFiles)
        suite = [suite, TestSuite.fromFile(fullfile(testsFolder, nativeTestFiles{i}))];
    end
    for i = 1:numel(mixedTestFiles)
        fileSuite = TestSuite.fromFile(fullfile(testsFolder, mixedTestFiles(i).file));
        for j = 1:numel(mixedTestFiles(i).excludedTests)
            fileSuite = fileSuite.selectIf(~HasName(ContainsSubstring(mixedTestFiles(i).excludedTests{j})));
        end
        suite = [suite, fileSuite];
    end

    fprintf('Running %d MATLAB-only tests from %d files\n', numel(suite), ...
        numel(nativeTestFiles) + numel(mixedTestFiles));

    % Run from tests folder so tests, DOLFyN, that open data files with relative paths work
    startDir = pwd;
    cleanup = onCleanup(@() cd(startDir));
    cd(testsFolder);

    runner = TestRunner.withTextOutput;
    results = runner.run(suite);
    disp(table(results));
end
