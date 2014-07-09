package com.hanif.enumeration;

public enum Suit {
	HEART,
	CLUB,
	DIAMOND,
	SPADE;

	public static Suit fromString(String text) {
		if (text != null) {
			for (Suit s : Suit.values()) {
				if (text.equalsIgnoreCase(s.name())) {
					return s;
				}
			}
		}
		return null;
	}
}
