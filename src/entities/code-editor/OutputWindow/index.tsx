import { type FC } from 'react';

interface IOutputWindow {
  outputDetails: {
    additional_files: null;
    callback_url: null;
    cpu_extra_time: string;
    cpu_time_limit: string;
    status: {
      desription: string;
      id: number;
    };
    compile_output: string;
    stdout: string;
    stderr: string;
  };
}

const OutputWindow: FC<IOutputWindow> = ({ outputDetails }) => {
  const getOutput = (): JSX.Element => {
    const statusId = outputDetails?.status?.id;

    switch (statusId) {
      case 6:
        return <pre className="output_fail">{atob(outputDetails?.compile_output)}</pre>;
      case 3:
        return (
          <pre className="output_success">
            {atob(outputDetails.stdout) !== null
              ? `${atob(outputDetails.stdout)}`
              : 'Code executed successfully'}
          </pre>
        );

      case 5:
        return <pre className="output_fail">{'Time Limit Exceeded'}</pre>;
      default:
        return <pre className="output_fail">{atob(outputDetails?.stderr)}</pre>;
    }
  };

  return (
    <>
      <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        Output
      </h1>
      <div className="w-full h-56 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto">
        {getOutput()}
      </div>
    </>
  );
};

export default OutputWindow;
