var sourceData107 = {"FileName":"/Users/asimms/Desktop/Programming/mhkit_matlab_simms_dev/MHKiT-MATLAB-2/mhkit/tests/Wave_TestPerformance.m","RawFileContents":["classdef Wave_TestPerformance < matlab.unittest.TestCase","","    methods (Test)","","        function test_capture_length(testCase)","            a = 40;","            b = 200;","            Obj.P = (b-a).*rand(1,100000) + a;","            %Obj.P = normrnd(200, 40, [1,100000]);","            a = 10;","            b = 300;","            Obj.J = (b-a).*rand(1,100000) + a;","            %Obj.J = normrnd(300, 10, [1,100000]);","","            L = capture_length(Obj.P, Obj.J);","            L_stats = mean(L);","            assertEqual(testCase,L_stats, 1.4, 'RelTol',0.1);","        end","","        function test_capture_length_matrix(testCase)","            seednum = 123;","            rng(seednum);","            a = 0.8;","            b = 4.5;","            Obj.Te = (b-a).*randn(1,100000) + a;","            %Obj.Te = normrnd(4.5, 0.8, [1,100000]);","            a = 40;","            b = 200;","            Obj.P = (b-a).*randn(1,100000) + a;","            %Obj.P = normrnd(200, 40, [1,100000]);","            a = 10;","            b = 300;","            Obj.J = (b-a).*randn(1,100000) + a;","            %Obj.J = normrnd(300, 10, [1,100000]);","            sigma = 4;","            Obj.Hm0 = abs(sigma*randn(1,100000)+1i*sigma*randn(1,100000));","            %Obj.Hm0 = raylrnd(4, [1,100000]);","            Obj.Hm0_bins = 0:0.5:18.5;","            Obj.Te_bins = 0:1:8;","","            L = capture_length(Obj.P, Obj.J);","            LM = capture_length_matrix(Obj.Hm0, Obj.Te, L, 'std', Obj.Hm0_bins, Obj.Te_bins);","","            assertEqual(testCase,size(LM.values), [38 9]);","            assertEqual(testCase,sum(sum(isnan(LM.values))), 34, 'RelTol',0.1);","        end","","        function test_wave_energy_flux_matrix(testCase)","            seednum = 123;","            rng(seednum);","            a = 0.8;","            b = 4.5;","            Obj.Te = (b-a).*randn(1,100000) + a;","            %Obj.Te = normrnd(4.5, 0.8, [1,100000]);","            a = 40;","            b = 200;","            Obj.P = (b-a).*randn(1,100000) + a;","            %Obj.P = normrnd(200, 40, [1,100000]);","            a = 10;","            b = 300;","            Obj.J = (b-a).*randn(1,100000) + a;","            sigma = 4;","            Obj.Hm0 = abs(sigma*randn(1,100000)+1i*sigma*randn(1,100000));","            Obj.Hm0_bins = 0:0.5:18.5;","            Obj.Te_bins = 0:1:8;","","            JM = wave_energy_flux_matrix(Obj.Hm0, Obj.Te,Obj.J, 'mean', Obj.Hm0_bins, Obj.Te_bins);","            assertEqual(testCase,size(JM.values), [38 9]);","            assertEqual(testCase,sum(sum(isnan(JM.values))), 34, 'RelTol',0.1);","        end","","        function test_power_matrix(testCase)","            seednum = 123;","            rng(seednum);","            a = 0.8;","            b = 4.5;","            Obj.Te = (b-a).*randn(1,100000) + a;","            %Obj.Te = normrnd(4.5, 0.8, [1,100000]);","            a = 40;","            b = 200;","            Obj.P = (b-a).*randn(1,100000) + a;","            %Obj.P = normrnd(200, 40, [1,100000]);","            a = 10;","            b = 300;","            Obj.J = (b-a).*randn(1,100000) + a;","            sigma = 4;","            Obj.Hm0 = abs(sigma*randn(1,100000)+1i*sigma*randn(1,100000));","            Obj.Hm0_bins = 0:0.5:18.5;","            Obj.Te_bins = 0:1:8;","","            L = capture_length(Obj.P, Obj.J);","            LM = capture_length_matrix(Obj.Hm0, Obj.Te,L, 'mean', Obj.Hm0_bins, Obj.Te_bins);","            JM = wave_energy_flux_matrix(Obj.Hm0, Obj.Te,Obj.J, 'mean', Obj.Hm0_bins, Obj.Te_bins);","            PM = power_matrix(LM, JM);","            assertEqual(testCase,size(PM.values), [38 9]);","            assertEqual(testCase,sum(sum(isnan(PM.values))), 34, 'RelTol',0.1);","        end","","        function test_mean_annual_energy_production(testCase)","            import matlab.unittest.constraints.IsEqualTo","            import matlab.unittest.TestCase","            import matlab.unittest.constraints.AbsoluteTolerance","","            a = 40;","            b = 200;","            Obj.P = (b-a).*randn(1,100000) + a;","            %Obj.P = normrnd(200, 40, [1,100000]);","            a = 10;","            b = 300;","            Obj.J = (b-a).*randn(1,100000) + a;","","            L = capture_length(Obj.P, Obj.J);","            maep = mean_annual_energy_production_timeseries(L, Obj.J);","            testCase.verifyThat(1754020.077,IsEqualTo(maep,'Within',AbsoluteTolerance(2e+06)))","        end","","        function test_plot_matrix(testCase)","            filename = 'wave_plot_matrix.png';","            if isfile(filename)","                delete(filename);","            end","","            seednum = 123;","            rng(seednum);","            a = 0.8;","            b = 4.5;","            Obj.Te = (b-a).*randn(1,100000) + a;","            %Obj.Te = normrnd(4.5, 0.8, [1,100000]);","            a = 40;","            b = 200;","            Obj.P = (b-a).*randn(1,100000) + a;","            %Obj.P = normrnd(200, 40, [1,100000]);","            a = 10;","            b = 300;","            Obj.J = (b-a).*randn(1,100000) + a;","            sigma = 4;","            Obj.Hm0 = abs(sigma*randn(1,100000)+1i*sigma*randn(1,100000));","            Obj.Hm0_bins = 0:0.5:18.5;","            Obj.Te_bins = 0:1:8;","            M = wave_energy_flux_matrix(Obj.Hm0,Obj.Te,Obj.J, 'mean', Obj.Hm0_bins, Obj.Te_bins);","","            plot_matrix(M,'Wave Energy Flux Matrix',\"savepath\",filename);","","            assertTrue(testCase,isfile(filename));","            delete(filename);","        end","","        function test_power_performance_workflow(testCase)","            filename = 'Capture Length Matrix mean.png';","            if isfile(filename)","                delete(filename);","            end","","            relative_file_name = './../../examples/data/wave/data.txt';","            full_file_name = fullfile(fileparts(mfilename('fullpath')), relative_file_name);","            S1 = read_NDBC_file(full_file_name);","            h = 60;","            seednum = 123;","            rng(seednum);","            a = 40;","            b = 200;","            Obj.P = (b-a).*randn(1,743) + a;","","            [x, y] = power_performance_workflow(S1,h,Obj.P,\"mean\",\"savepath\",'./');","","            assertTrue(testCase,isfile(filename));","            delete(filename);","            assertTrue(testCase,isfield(x,\"mean\"));","            assertTrue(testCase,isfield(x,\"min\"));","            assertTrue(testCase,isfield(x,\"max\"));","            assertTrue(testCase,isfield(x,\"std\"));","            assertTrue(testCase,isfield(x,\"median\"));","            assertTrue(testCase,isfield(x,\"count\"));","            assertTrue(testCase,isfield(x,\"sum\"));","            assertTrue(testCase,isfield(x,\"freq\"));","            assertEqual(testCase,y,401239.4822345051, 'RelTol',0.00001);","","        end","","    end","","end",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":5,"Hits":1,"StartColumnNumbers":8,"EndColumnNumbers":46,"ContinuedLine":false},{"LineNumber":20,"Hits":1,"StartColumnNumbers":8,"EndColumnNumbers":53,"ContinuedLine":false},{"LineNumber":48,"Hits":1,"StartColumnNumbers":8,"EndColumnNumbers":55,"ContinuedLine":false},{"LineNumber":72,"Hits":1,"StartColumnNumbers":8,"EndColumnNumbers":44,"ContinuedLine":false},{"LineNumber":99,"Hits":1,"StartColumnNumbers":8,"EndColumnNumbers":61,"ContinuedLine":false},{"LineNumber":117,"Hits":1,"StartColumnNumbers":8,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":148,"Hits":1,"StartColumnNumbers":8,"EndColumnNumbers":58,"ContinuedLine":false}],"Statement":[{"LineNumber":6,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":7,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":8,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":46,"ContinuedLine":false},{"LineNumber":10,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":11,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":12,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":46,"ContinuedLine":false},{"LineNumber":15,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":16,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":17,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":61,"ContinuedLine":false},{"LineNumber":21,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":26,"ContinuedLine":false},{"LineNumber":22,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":23,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":24,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":25,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":27,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":28,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":29,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":31,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":32,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":33,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":35,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":36,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":74,"ContinuedLine":false},{"LineNumber":38,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":39,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":41,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":42,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":93,"ContinuedLine":false},{"LineNumber":44,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":58,"ContinuedLine":false},{"LineNumber":45,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":79,"ContinuedLine":false},{"LineNumber":49,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":26,"ContinuedLine":false},{"LineNumber":50,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":51,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":52,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":53,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":55,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":56,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":57,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":59,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":60,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":61,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":62,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":63,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":74,"ContinuedLine":false},{"LineNumber":64,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":65,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":67,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":99,"ContinuedLine":false},{"LineNumber":68,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":58,"ContinuedLine":false},{"LineNumber":69,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":79,"ContinuedLine":false},{"LineNumber":73,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":26,"ContinuedLine":false},{"LineNumber":74,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":75,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":76,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":77,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":79,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":80,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":81,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":83,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":84,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":85,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":86,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":87,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":74,"ContinuedLine":false},{"LineNumber":88,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":89,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":91,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":92,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":93,"ContinuedLine":false},{"LineNumber":93,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":99,"ContinuedLine":false},{"LineNumber":94,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":95,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":58,"ContinuedLine":false},{"LineNumber":96,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":79,"ContinuedLine":false},{"LineNumber":104,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":105,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":106,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":108,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":109,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":110,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":112,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":113,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":70,"ContinuedLine":false},{"LineNumber":114,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":94,"ContinuedLine":false},{"LineNumber":118,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":46,"ContinuedLine":false},{"LineNumber":119,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":120,"Hits":0,"StartColumnNumbers":16,"EndColumnNumbers":33,"ContinuedLine":false},{"LineNumber":123,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":26,"ContinuedLine":false},{"LineNumber":124,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":125,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":126,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":127,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":129,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":130,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":131,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":133,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":134,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":135,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":136,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":137,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":74,"ContinuedLine":false},{"LineNumber":138,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":139,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":140,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":97,"ContinuedLine":false},{"LineNumber":142,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":73,"ContinuedLine":false},{"LineNumber":144,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":145,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":149,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":56,"ContinuedLine":false},{"LineNumber":150,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":151,"Hits":0,"StartColumnNumbers":16,"EndColumnNumbers":33,"ContinuedLine":false},{"LineNumber":154,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":71,"ContinuedLine":false},{"LineNumber":155,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":92,"ContinuedLine":false},{"LineNumber":156,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":157,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":158,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":26,"ContinuedLine":false},{"LineNumber":159,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":160,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":161,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":162,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":44,"ContinuedLine":false},{"LineNumber":164,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":83,"ContinuedLine":false},{"LineNumber":166,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":167,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":168,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":51,"ContinuedLine":false},{"LineNumber":169,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":170,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":171,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":172,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":53,"ContinuedLine":false},{"LineNumber":173,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":52,"ContinuedLine":false},{"LineNumber":174,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":175,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":51,"ContinuedLine":false},{"LineNumber":176,"Hits":1,"StartColumnNumbers":12,"EndColumnNumbers":72,"ContinuedLine":false}]}}