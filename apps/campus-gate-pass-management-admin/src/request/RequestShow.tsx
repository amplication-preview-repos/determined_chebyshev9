import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const RequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="requestLetter" source="requestLetter" />
        <TextField label="status" source="status" />
        <ReferenceField label="student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="submissionDate" source="submissionDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
