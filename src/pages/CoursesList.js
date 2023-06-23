import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Table from '../components/Table';
import { getCourses, deleteCourse } from '../api/courses';

const CoursesList = () => {
  const queryClient = useQueryClient()
  const { data: courses, isLoading, error } = useQuery('courses', getCourses);
  const mutation = useMutation(deleteCourse, {
    onSuccess: () => {
      queryClient.invalidateQueries('courses');
    }
  })
  const handleRemoveRow = (rowUuid) => {
    mutation.mutate(rowUuid);
  };
  const tableColumns = [
    { columnKey: 'course_name', columnName: 'Course Name' },
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
          <h2>Current Courses</h2>
          {courses.length > 0 ? (
            <Table rows={courses} columns={tableColumns} onRemoveRow={handleRemoveRow} />
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
