
import React from 'react';
import { useRouter } from 'next/router';
import { useAtom, atom } from 'jotai';
import { ButtonPrimary } from '../components/buttons';

// Jotai atom for storing the questionnaire title
const questionnaireTitleAtom = atom('');

const NewQuestionnaire: React.FC = () => {
  const router = useRouter();
  const [questionnaireTitle, setQuestionnaireTitle] = useAtom(questionnaireTitleAtom);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Logic to save the new questionnaire data
    // ...

    // Navigate back to the questionnaire list page
    router.push('/');
  };

  return (
    <div>
      <h1>Create New Questionnaire</h1>
      <form onSubmit={handleFormSubmit}>
        {/* Form field for entering the questionnaire title */}
        <label>
          Title:
          <input
            type="text"
            value={questionnaireTitle}
            onChange={(e) => setQuestionnaireTitle(e.target.value)}
          />
        </label>

        {/* Submit button */}
        <ButtonPrimary>Save Questionnaire</ButtonPrimary>
      </form>
    </div>
  );
};

export default NewQuestionnaire;