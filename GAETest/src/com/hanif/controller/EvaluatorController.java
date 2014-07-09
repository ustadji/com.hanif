package com.hanif.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Validator;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hanif.Evaluation;
import com.hanif.RequestCommand;

//@RestController
@Controller
@RequestMapping("/EvaluatorController")
public class EvaluatorController {

	@Autowired
	private Validator requestValidator;
	
	private Evaluation evaluation;
	
	@RequestMapping(method = RequestMethod.GET, produces = {"application/json"})
	public @ResponseBody Evaluation evaluate(@Validated RequestCommand requestCommand, BindingResult validationResults) {
		System.out.println("inside controller! requestCommand:" + requestCommand);
		
		System.out.println("calling validate");
		this.requestValidator.validate(requestCommand, validationResults);

		this.evaluation = new Evaluation();
		if (validationResults.hasErrors()) {
			this.evaluation.setResult(validationResults.getAllErrors().toString());
			return this.evaluation;
		}
		
//		model.addAttribute("name", name);

		this.evaluation.setResult("Aces beat kings");
		return this.evaluation;
	}
}
