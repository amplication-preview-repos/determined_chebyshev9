import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RequestTitle } from "../request/RequestTitle";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="class" source="classField" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="requests"
          reference="Request"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestTitle} />
        </ReferenceArrayInput>
        <TextInput label="rollNumber" source="rollNumber" />
      </SimpleForm>
    </Edit>
  );
};
