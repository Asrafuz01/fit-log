"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FitLogContext = createContext();

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const addToPlan = (workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      showToast("Already in today's plan");
      return;
    }

    if (plan.length >= 5) {
      showToast("Today's plan is full");
      return;
    }

    setPlan((previous) => [
      ...previous,
      {
        ...workout,
        done: false,
      },
    ]);

    showToast("Added to today's plan");
  };

  const removeFromPlan = (id) => {
    setPlan((previous) => previous.filter((item) => item.id !== id));
    showToast("Removed from today's plan");
  };

  const toggleDone = (id) => {
    setPlan((previous) =>
      previous.map((item) =>
        item.id === id
          ? {
              ...item,
              done: !item.done,
            }
          : item,
      ),
    );

    showToast("Workout status updated");
  };

  const saveWorkout = (workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      showToast("Already saved");
      return;
    }

    setSaved((previous) => [...previous, workout]);
    showToast("Saved for later");
  };

  const removeSaved = (id) => {
    setSaved((previous) => previous.filter((item) => item.id !== id));
    showToast("Removed from saved");
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        toggleDone,
        saveWorkout,
        removeSaved,
      }}
    >
      {children}

      {toast && (
        <div className="toast toast-end toast-bottom z-50">
          <div className="alert border border-[#ccff00] bg-[#111] text-white shadow-lg">
            <span>{toast}</span>
          </div>
        </div>
      )}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  return useContext(FitLogContext);
}
