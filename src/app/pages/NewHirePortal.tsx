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
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
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
    e: React.ChangeEvent<HTMLInputElement>,
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
      <section
        className="relative overflow-hidden py-24 md:py-32 text-white text-center"
        style={{
          background: `linear-gradient(135deg, var(--navy) 0%, #162A5E 100%)`,
        }}
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
            alt="Employee onboarding"
            className="w-full h-full object-cover"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[color:var(--navy)]/85"></div>

        {/* GLOW EFFECTS */}
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>

        {/* FLOATING BADGE */}
        <div className="absolute top-10 right-10 hidden md:block bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs">
          🎯 New Hire Portal
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-2 leading-tight">
            Seamless{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Onboarding
            </span>{" "}
            Experience
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-1 max-w-2xl">
            Get started with confidence. Our onboarding system ensures a smooth,
            structured, and engaging experience for every new team member.
          </p>

          {/* DIVIDER */}
          <div className="w-24 h-1 bg-[var(--gold)] mb-10 mt-5 rounded-full"></div>

          {/* FEATURES */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Easy Setup",
              "Guided Process",
              "Secure Access",
              "HR Support",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm backdrop-blur-md hover:bg-white/10 transition"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#boardingTask"
              className="px-8 py-4 rounded-md font-semibold transition-all hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #D4A017, #FFD95A)",
                color: "var(--navy)",
              }}
            >
              Start Onboarding →
            </a>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-md border border-purple-400/50 hover:bg-purple-500/10 transition"
            >
              Need Help?
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10 bg-gray-100">
        {/* 🔥 PROGRESS BAR */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow" id="boardingTask">
          <div className="flex justify-between mb-2">
            <span className="font-medium text-[var(--navy)]">
              Onboarding Progress
            </span>
            <span className="text-sm text-gray-600">{progress}%</span>
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
          <div className="bg-white p-8 rounded-xl shadow mb-6 ">
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
                      task.completed ? "line-through text-gray-500" : ""
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
                <p className="text-lg font-medium">Cherrie Give Resultz</p>
                <p className="text-sm text-gray-500">Senior HR Consultant</p>
              </div>

              <button className="px-6 py-2 bg-[var(--gold)] text-[var(--navy)] rounded-lg hover:opacity-90">
                Message Buddy
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="ml-auto mr-20 mb-1">
        <span className="text-black mr-2">Onboarding process completed?</span>
        <Link
          to="/Jobs"
          className="inline-flex items-center px-6 py-3 rounded-md font-medium transition-all hover:scale-105"
          style={{
            background: "linear-gradient(90deg, #D4A017, #FFD95A)",
            color: "var(--navy)",
          }}
        >
          View Available Jobs →
        </Link>
      </div>

      <Footer />
    </div>
  );
}
