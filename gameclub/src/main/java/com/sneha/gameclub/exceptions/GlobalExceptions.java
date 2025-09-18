package com.sneha.gameclub.exceptions;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
@RestControllerAdvice
public class GlobalExceptions {
    @ExceptionHandler(IdNotPresentException.class)
    public String handleNotPresntException(IdNotPresentException ex){
        return ex.getMessage();
    }
    @ExceptionHandler(BusinessException.class)

    public String handlerBusinessException(BusinessException ex){
        return ex.getMessage();
    }
}
