import React from "react";
import TodoList from "./components/TodoList";
import { Box, Typography } from "@mui/material"; // Material UI components

const App: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
        minWidth: "193vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "4rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "600px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "0.25rem", color: "#2c3e50" }}>
          📝 My Todo App
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: "1.5rem", color: "#7f8c8d" }}>
          Stay organized, stay productive.
        </Typography>

        <TodoList />
      </Box>
    </Box>
  );
};

export default App;
