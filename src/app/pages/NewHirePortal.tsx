import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Link } from "react-router";

export default function NewHirePortal() {
  const [activeTab, setActiveTab] = useState("all");

  // 🧩 TASKS
  const [tasks, setTasks] = useState([
    { id: 1, title: "Submit ID Documents", completed: false },
    { id: 2, title: "Complete HR Training", completed: false },
    { id: 3, title: "Review Company Policies", completed: false },
    { id: 4, title: "Meet Your Onboarding Buddy", completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // ✅ PROGRESS CALCULATION
  const completedTasks = tasks.filter((t) => t.completed).length;
  const progress = Math.round((completedTasks / tasks.length) * 100);

  // 🧩 DOCUMENTS
  const [documents, setDocuments] = useState<(File | null)[]>([
    null,
    null,
    null,
  ]);

  const handleFileChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;

    const updated = [...documents];
    updated[index] = e.target.files[0];
    setDocuments(updated);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <Navigation />

      {/* HERO */}
      <section className="bg-[var(--navy)] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to Your Onboarding Portal
        </h1>
        <p className="text-gray-200 mt-2">
          Everything you need to get started successfully
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* 🔥 PROGRESS BAR */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between mb-2">
            <span className="font-medium text-[var(--navy)]">
              Onboarding Progress
            </span>
            <span className="text-sm text-gray-600">
              {progress}%
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="h-3 rounded-full transition-all"
              style={{
                width: `${progress}%`,
                backgroundColor: "var(--gold)",
              }}
            ></div>
          </div>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["all", "tasks", "documents", "training", "buddy"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full border ${
                activeTab === tab
                  ? "bg-[var(--gold)] text-[var(--navy)]"
                  : "bg-white text-gray-600"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* TASKS */}
        {(activeTab === "all" || activeTab === "tasks") && (
          <div className="bg-white p-8 rounded-xl shadow mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--navy)]">
              Onboarding Tasks
            </h2>

            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-4 border rounded-lg flex justify-between cursor-pointer ${
                    task.completed
                      ? "bg-green-50 border-green-400"
                      : "hover:border-[var(--gold)]"
                  }`}
                >
                  <span
                    className={
                      task.completed
                        ? "line-through text-gray-500"
                        : ""
                    }
                  >
                    {task.title}
                  </span>

                  <span>{task.completed ? "✔" : "⬜"}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DOCUMENTS */}
        {(activeTab === "all" || activeTab === "documents") && (
          <div className="bg-white p-8 rounded-xl shadow mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--navy)]">
              Upload Documents
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((file, index) => (
                <div key={index} className="border p-4 rounded-lg">
                  <label className="block mb-2 font-medium">
                    Doc {index + 1}
                  </label>

                  <input
                    type="file"
                    onChange={(e) => handleFileChange(index, e)}
                    className="w-full border p-2 rounded"
                  />

                  {file && (
                    <p className="text-sm text-gray-600 mt-2">
                      Uploaded: {file.name}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TRAINING */}
        {(activeTab === "all" || activeTab === "training") && (
  <div className="bg-white p-8 rounded-xl shadow mb-6">
    <h2 className="text-2xl font-semibold mb-4 text-[var(--navy)]">
      Training Materials
    </h2>

    <ul className="space-y-3">

      {/* 📘 HANDBOOK */}
      <Link
        to="/training/handbook"
        className="block p-4 border rounded hover:border-[var(--gold)] hover:bg-gray-50 transition"
      >
        📘 Employee Handbook
      </Link>

      {/* 🎥 VIDEO */}
      <Link
        to="/resources"
        className="block p-4 border rounded hover:border-[var(--gold)] hover:bg-gray-50 transition"
      >
        🎥 HR Training Video
      </Link>

      {/* 📄 POLICIES */}
      <Link
        to="/training/policies"
        className="block p-4 border rounded hover:border-[var(--gold)] hover:bg-gray-50 transition"
      >
        📄 Company Policies
      </Link>

    </ul>
  </div>
)}

        {/* BUDDY */}
        {(activeTab === "all" || activeTab === "buddy") && (
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--navy)]">
              Your Onboarding Buddy
            </h2>

            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <p className="text-lg font-medium">
                  Cherrie Give Resultz
                </p>
                <p className="text-sm text-gray-500">
                  Senior HR Consultant
                </p>
              </div>

              <button className="px-6 py-2 bg-[var(--gold)] text-[var(--navy)] rounded-lg hover:opacity-90">
                Message Buddy
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}