export const camelToSnakeCase = (data) => {
    return Object.keys(data).reduce((payload, key) => {
      const snakeCaseKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      payload[snakeCaseKey] = data[key];
      return payload;
    }, {});
  };

export const handleRequestError = (error) => {
  if (error.response) {
    const { status } = error.response;
    switch (status) {
      case 400:
        throw new Error("There is something wrong with the request.");
      case 404:
        throw new Error("The provided resource(s) were not found in the system.");
      case 409:
        throw new Error("A record like this already exists in the system.");
      default:
        throw new Error("Unable to complete the request.");
    }
  } else {
    throw new Error("Network error ocurred. Please try again.")
  }
};

export const transformCoursesForDisplay = (courses) => {
  return courses.map((course) => ({
    value: course.uuid,
    label: course.course_name,
  }));
};

export const transformStudentsForDisplay = (students) => {
  return students.map((student) => ({
    value: student.uuid,
    label: `${student.first_name} ${student.last_name}`,
  }));
};
