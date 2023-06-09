const typeString =
  'contract Campaign is Ownable {\n\tuint public minimumContribution;\n\tuint public totalApprovers;\n\n\tstruct Request {\n\t\tstring description;\n\t\tuint value;\n\t\taddress recepient;\n\t\tbool complete;\n\t\tuint approvalCount;\n\t\tuint timestamp;\n\t\tmapping(address => bool) approvals;\n\t}\n\tRequest[] public requests;\n\tmapping(address => bool) public approvers;\n\n\tconstructor(uint minimum) {\n\t\tminimumContribution = minimum;\n\t}\n\n\tfunction contribute() public payable {\n\t\trequire(msg.value > minimumContribution);';

export default typeString;
