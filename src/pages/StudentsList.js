import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Table from '../components/Table';
import { getStudents, deleteStudent } from '../api/students';

const StudentsList = () => {
  const queryClient = useQueryClient()
  const { data: students, isLoading, error } = useQuery('students', getStudents);
  const mutation = useMutation(deleteStudent, {
    onSuccess: () => {
      queryClient.invalidateQueries('students');
    },
  })
  const handleRemoveRow = (rowUuid) => {
    mutation.mutate(rowUuid);
  };
  const tableColumns = [
    { columnKey: 'student_name', columnName: 'Name & Family Name' },
    { columnKey: 'date_of_birth', columnName: 'DOB' },
    { columnKey: 'email', columnName: 'Email' },
  ];
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <div className="formbold-form-title">
          <h2>Current Students</h2>
          {students.length > 0 ? (
            <Table rows={students} columns={tableColumns} onRemoveRow={handleRemoveRow} />
          ) : (
            <p>No students found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentsList;
