import React from 'react'
import { classNames } from './Utils'

export function Button({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={
        classNames(
          "relative inline-flex items-center px-4 py-2  text-sm font-medium rounded-md bg-primary hover:bg-primary-50",
          className
        )}
      {...rest}
    >
      {children}
    </button> 
  )
}

export function PageButton({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={
        classNames(
          "relative inline-flex items-center px-2 py-2  bg-primary text-sm font-medium  hover:bg-primary-50",
          className
        )}
      {...rest}
    >
      {children}
    </button>
  )
}

