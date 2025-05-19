import * as path from 'node:path';

const pathModel = path.join(__dirname, './../../model/proto');
export const ProtoArrayConfig = {
  package: [],
  protoPath: [path.join(pathModel, './enterprise/enterprise.grpc.proto')],
};
