import React from "react";

export type studentProps = {
  formArr: form[];
  setFormArr: React.Dispatch<React.SetStateAction<form[]>>;
  qualification: qualification[];
  setQualification: React.Dispatch<React.SetStateAction<qualification[]>>;
  file: file[];
  setFile: React.Dispatch<React.SetStateAction<file[]>>;
};

export type qualification = {
  label: string;
  check: boolean;
};

export type form = {
  label: string;
  type: string;
  value: string;
  error: boolean;
};
export type file = {
  label: string;
  type: string;
  min: string;
  max: string;
  fileType: string;
  error: boolean;
};
