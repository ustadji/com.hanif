package com.hanif.validator;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.hanif.RequestCommand;

@Component
public class RequestValidator implements Validator {

	@Override
	public boolean supports(Class<?> arg0) {
		return RequestCommand.class.equals(arg0);
	}

	@Override
	public void validate(Object target, Errors errors) {
		System.out.println("inside validate");
		RequestCommand requestCommand = (RequestCommand) target;
		String firstCard =  requestCommand.getFirstCard();
		String secondCard = requestCommand.getSecondCard();
		String thirdCard = requestCommand.getThirdCard();
		String fourthCard = requestCommand.getFourthCard();
		
		if (StringUtils.isEmpty(firstCard)) {
			errors.reject("First card cannot be empty");
		}
		if (StringUtils.isEmpty(secondCard)) {
			errors.reject("Second card cannot be empty");
		}		
		if (StringUtils.isEmpty(thirdCard)) {
			errors.reject("Third card cannot be empty");
		}
		if (StringUtils.isEmpty(fourthCard)) {
			errors.reject("Fourth card cannot be empty");
		}
	}

}
