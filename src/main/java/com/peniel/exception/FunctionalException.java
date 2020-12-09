package com.peniel.exception;


public class FunctionalException extends Exception {


    public static final String NAME_ALREADY_EXISTS_SAVE = "Name already exists";
    public static final String NOT_FOUND_ENTYITY ="Entity not found";
    public static final String FUNCTIONAL_EXCEPTION_OCCURED = "Functional exception occured";


    public FunctionalException() {
        super();
    }

    public FunctionalException(String message) {
        super(message);
    }

    public FunctionalException(String message, Throwable cause) {
        super(message, cause);
    }

    public FunctionalException(Throwable cause) {
        super(cause);
    }

    protected FunctionalException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}

