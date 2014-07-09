package com.hanif;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Evaluation {

	@JsonProperty
	private boolean success;
	
	@JsonProperty
	private String result;
	
	public String getResult() {
		return this.result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public boolean isSuccess() {
		return this.success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}
}
