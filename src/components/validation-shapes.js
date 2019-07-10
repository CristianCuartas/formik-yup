import Yup from 'yup';
import messages from './validation-constants';

const buildRequiredForDiffAddress = requiredText => ({
  is: false,
  then: Yup.string().required(requiredText)
});

const shapeUsingWhenPerField = {
  //   inputsCondition: Yup.boolean().required(messages.inputsCondition),
  //   selectNotification: Yup.string().when(
  //     'inputsCondition',
  //     buildRequiredForDiffAddress(messages.selectNotification)
  //   ),
  //   hours: Yup.string().when(
  //     'inputsCondition',
  //     buildRequiredForDiffAddress(messages.hours)
  //   ),
  //   days: Yup.string().when(
  //     'inputsCondition',
  //     buildRequiredForDiffAddress(messages.days)
  //   )
};

// const lazyShape = Yup.object().shape();

export { shapeUsingWhenPerField };
