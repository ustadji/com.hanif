package com.hanif;

import java.text.MessageFormat;

public class Test {

	public static void main(String[] args) {

		String version = System.getProperty("java.version");

		int comparison = version.compareTo("1.6");

		System.out.println(MessageFormat.format(

				"java.version is \"{0}\" and compareTo(\"1.6\") returns {1}",

				version, comparison));

		if (comparison >= 0) {

			System.out.println("comparison results in true");

		} else {

			System.out.println("comparison results in false");

		}

	}

}