// src/redux/actions.js
import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from './actionTypes';

export const addStudent = (student) => ({
  type: ADD_STUDENT,
  payload: student,
});

export const editStudent = (student) => ({
  type: EDIT_STUDENT,
  payload: student,
});

export const deleteStudent = (id) => ({
  type: DELETE_STUDENT,
  payload: id,
});
