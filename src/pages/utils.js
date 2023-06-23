import { toast } from 'react-toastify';

export const handleFormSubmit = async (submitFunction, successMessage) => {
  try {
    await submitFunction();
    toast.success(successMessage);
  } catch (error) {
    toast.error(error.message);
  }
};
