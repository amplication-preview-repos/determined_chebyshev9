import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
  DateTimeInput,
} from "react-admin";
import { StudentTitle } from "../student/StudentTitle";

export const RequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="student.id" reference="Student" label="student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <DateTimeInput label="submissionDate" source="submissionDate" />
      </SimpleForm>
    </Edit>
  );
};
