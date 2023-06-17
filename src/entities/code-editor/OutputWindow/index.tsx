import { type FC } from 'react';

import './styles.scss';

interface IOutputWindow {
  outputDetails?: {
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
  const getOutput = (details: {
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
  }): JSX.Element => {
    const statusId = outputDetails?.status?.id;

    switch (statusId) {
      case 6:
        return <pre className="output__result_fail">{atob(details.compile_output)}</pre>;
      case 3:
        return (
          <pre className="output__result_success">
            {atob(details.stdout) !== null
              ? `${atob(details.stdout)}`
              : 'Code executed successfully'}
          </pre>
        );

      case 5:
        return <pre className="output__result_fail">{'Time Limit Exceeded'}</pre>;
      default:
        return <pre className="output__result_fail">{atob(details.stderr)}</pre>;
    }
  };

  return (
    <div className="output">
      <div className="output__header slim-rainbow-border">Compilation result</div>
      <div className="output__result">
        {outputDetails !== undefined && getOutput(outputDetails)}
      </div>
    </div>
  );
};

export default OutputWindow;
