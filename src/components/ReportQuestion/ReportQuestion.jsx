import React, { useEffect, useState } from 'react';
import Button from '../../components/common/buttons/Button/Button';
import usePost from '../../hooks/usePost';
import { API_ROUTES } from '../../routes/apiRoutes';
import ToastNotification from '../ToastNotification/ToastNotification';
import PreLoader from '../common/Preloader/PreLoader';

const ReportQuestion = ({ questionId, handleClose }) => {
  const [formData, setFormData] = useState({
    'Question is not relevant to the specification': false,
    'Correct answer is not displayed': false,
    'Question is ambiguous': false,
    textField: '',
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const { data, postData, loading } = usePost(API_ROUTES.REPORT_QUESTION);

  const handleSubmit = async () => {
    const selectedOptions = [];
    for (let checkbox in formData) {
      if (formData[checkbox] === true) {
        selectedOptions.push(checkbox);
      }
    }
    await postData({
      questionId: questionId,
      description: formData.textField,
      options: selectedOptions,
    });
  };
  // const isOptionSelected = Object.values(formData).some(
  //   (value) => value === true
  // );
  // const isOptionSelected = Object.values(formData).some(
  //   (value) =>
  //     value === true || (typeof value === 'string' && value.trim() !== '')
  // );
  const isCheckboxSelected = Object.entries(formData).some(
    ([key, value]) => key !== 'textField' && value === true
  );
  const isTextFieldNotEmpty = formData.textField.trim() !== '';
  const isOptionSelected = isCheckboxSelected || isTextFieldNotEmpty;

  useEffect(() => {
    if (data) {
      handleClose();
      ToastNotification.success(data.message);
    }
  }, [data]);
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-bold">Checkbox Form</h2>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="Question is not relevant to the specification"
                checked={
                  formData['Question is not relevant to the specification']
                }
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">
                Question is not relevant to the specification
              </span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="Correct answer is not displayed"
                checked={formData['Correct answer is not displayed']}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Correct answer is not displayed</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="Question is ambiguous"
                checked={formData['Question is ambiguous']}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Question is ambiguous</span>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Text Field
            </label>
            <textarea
              name="textField"
              value={formData.textField}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
            ></textarea>
          </div>
          {/* <Button
            title={'Submit'}
            onClick={handleSubmit}
            disabled={!isOptionSelected}
          /> */}
          <Button
            key={isOptionSelected}
            title={'Submit'}
            onClick={handleSubmit}
            disabled={!isOptionSelected}
          />
        </div>
      )}
    </>
  );
};

export default ReportQuestion;
