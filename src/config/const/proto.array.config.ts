import * as path from 'node:path';

const pathModel = path.join(__dirname, './../../model/proto');
export const ProtoArrayConfig = {
  package: ['enterprise', 'organization', 'project', 'privileges'],
  protoPath: [
    path.join(pathModel, './enterprise/enterprise.grpc.proto'),
    path.join(
      pathModel,
      './enterprise/organization/enterprise.organization.grpc.proto',
    ),
    path.join(
      pathModel,
      './enterprise/project/enterprise.organization.project.grpc.proto',
    ),
    path.join(
      pathModel,
      './enterprise/project/privileges/enterprise.organization.project.privileges.grpc.proto',
    ),
  ],
};
