import React, { useState, useRef, useEffect } from 'react';
import { IconAI, IconArrowUp } from '../common/SvgIcons';

interface PredictionItem {
  main: string;
  secondary: string;
}

export const GraderForm: React.FC = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [showValidation, setShowValidation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const [predictions, setPredictions] = useState<PredictionItem[]>([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const formRef = useRef<HTMLFormElement>(null); // For closing predictions on outside click

  const mockPredictionsData: PredictionItem[] = [ // Example data
    { main: 'Pizza Palace', secondary: '123 Main St, Anytown, USA' },
    { main: 'Burger Barn', secondary: '456 Oak Ave, Big City, USA' },
    { main: 'Sushi Spot', secondary: '789 Pine Ln, Smallville, USA' },
    { main: 'Taco Haven', secondary: '101 Cedar Rd, Village, USA' },
    { main: 'The Coffee Corner', secondary: '202 Birch St, Metropolis, USA' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurantName || selectedIndex === -1) {
      setShowValidation(true);
      setShowSuccess(false);
      setShowFail(false);
    } else {
      setShowValidation(false);
      setShowPredictions(false); // Hide predictions on submit

      // Simulate API call
      console.log(`Submitting report for: ${restaurantName}`);
      setTimeout(() => {
        const success = Math.random() > 0.5; // Simulate success/fail
        if (success) {
          setShowSuccess(true);
          setShowFail(false);
        } else {
          setShowFail(true);
          setShowSuccess(false);
        }
      }, 1000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRestaurantName(value);
    setShowValidation(false);
    setShowSuccess(false);
    setShowFail(false);

    if (value.length > 2) {
      // Filter mock predictions based on input
      const filtered = mockPredictionsData.filter(p =>
        p.main.toLowerCase().includes(value.toLowerCase()) ||
        p.secondary.toLowerCase().includes(value.toLowerCase())
      );
      setPredictions(filtered);
      setShowPredictions(true);
      setSelectedIndex(-1); // Reset selected index on new input
    } else {
      setPredictions([]);
      setShowPredictions(false);
    }
  };

  const handlePredictionClick = (prediction: PredictionItem, index: number) => {
    setRestaurantName(`${prediction.main}, ${prediction.secondary}`);
    setShowPredictions(false);
    setSelectedIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (showPredictions && predictions.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prevIndex => (prevIndex + 1) % predictions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prevIndex => (prevIndex - 1 + predictions.length) % predictions.length);
      } else if (e.key === 'Enter' && selectedIndex !== -1) {
        e.preventDefault();
        handlePredictionClick(predictions[selectedIndex], selectedIndex);
      }
    }
  };

  // Close predictions if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setShowPredictions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative p-6 bg-white rounded-2xl shadow-lg w-full max-w-lg mx-auto z-20"> {/* hp-grader_form2-wrap */}
      {/* Predictions Container (positioned above the input/form) */}
      {showPredictions && predictions.length > 0 && (
        <div className="predictions-container-style opacity-100 transition-opacity duration-300 ease-in-out">
          {predictions.map((prediction, index) => (
            <div
              key={index}
              className={`prediction-item-style ${selectedIndex === index ? 'selected bg-bg-hover-light' : ''}`}
              onClick={() => handlePredictionClick(prediction, index)}
            >
              <span className="main-text-style text-gray-900">{prediction.main}</span>
              <span className="secondary-text-style text-gray-tag-text group-hover:text-gray-tag-hover">
                {prediction.secondary}
              </span>
            </div>
          ))}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="relative z-10"> {/* hp-grader_form2, z-index to be above predictions when they are hidden */}
        <div className="flex items-center space-x-2 mb-4"> {/* hp-grader_form2-ai-meta */}
          <IconAI className="text-black" /> {/* icon_24 */}
          <p className="text-base font-semibold">Get a free report for your restaurant</p> {/* h16 */}
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"> {/* hp-grader-form2-actions */}
          <input
            className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500" // hp-grader_form2-input w-input
            type="text"
            placeholder="Find your restaurant name"
            value={restaurantName}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => restaurantName.length > 2 && setPredictions(mockPredictionsData.filter(p => p.main.toLowerCase().includes(restaurantName.toLowerCase()) || p.secondary.toLowerCase().includes(restaurantName.toLowerCase())))} // Re-show on focus if text exists
            autoComplete="off"
            required
            id="grader-name"
            name="grader-name-2"
          />
          <button
            type="submit"
            className="flex-shrink-0 flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors" // hp-grader_btn-submit2 w-inline-block
          >
            <p className="text-white">Get my report</p> {/* hp-grader_btn-submt2-label */}
            <IconArrowUp className="text-white transform -rotate-90" /> {/* link-icon="arrow-up" - rotated for visual */}
          </button>
        </div>
        {showValidation && (
          <div className="mt-2 text-sm text-red-600"> {/* hp-grader-form2_validation */}
            Please select a recognized restaurant from the dropdown list.
          </div>
        )}
      </form>
      {showSuccess && (
        <div className="mt-4 text-green-600">
          <div>Thank you! Your submission has been received!</div>
        </div>
      )}
      {showFail && (
        <div className="mt-4 text-red-600">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      )}
    </div>
  );
};