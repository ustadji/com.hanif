package com.hanif;

import com.hanif.enumeration.Suit;

public class RequestCommand {

	private String firstCard;
	
	private Suit suit;
	
	private String secondCard;
	
	private String thirdCard;
	
	private String fourthCard;

	public String getFirstCard() {
		return this.firstCard;
	}

	public void setFirstCard(String firstCard) {
		this.firstCard = firstCard;
	}

	public String getSecondCard() {
		return this.secondCard;
	}

	public void setSecondCard(String secondCard) {
		this.secondCard = secondCard;
	}

	public String getThirdCard() {
		return this.thirdCard;
	}

	public void setThirdCard(String thirdCard) {
		this.thirdCard = thirdCard;
	}

	public String getFourthCard() {
		return this.fourthCard;
	}

	public void setFourthCard(String fourthCard) {
		this.fourthCard = fourthCard;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("RequestCommand [firstCard=");
		builder.append(this.firstCard);
		builder.append(", secondCard=");
		builder.append(this.secondCard);
		builder.append(", thirdCard=");
		builder.append(this.thirdCard);
		builder.append(", fourthCard=");
		builder.append(this.fourthCard);
		builder.append("]");
		return builder.toString();
	}

}
