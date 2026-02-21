import { useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";

export default function AdminDashboardPage() {
  const {
    authUser,
    pendingUsers,
    isLoadingPendingUsers,
    fetchPendingUsers,
    approveUser,
    rejectUser,
  } = useAuthStore();

  useEffect(() => {
    if (authUser?.role === "system_admin") {
      fetchPendingUsers();
    }
  }, [authUser, fetchPendingUsers]);

  if (!["admin", "system_admin"].includes(authUser?.role)) {
    return (
      <div className="text-white p-6">
        <h2 className="text-2xl font-bold">Unauthorized</h2>
        <p className="text-gray-400 mt-2">Only admins can access this page.</p>
      </div>
    );
  }

  if (authUser?.role === "admin") {
    return (
      <div className="text-white p-6">
        <h1 className="text-2xl font-bold mb-2">College Admin Dashboard</h1>
        <p className="text-gray-400">
          Welcome! You are logged in as college admin.
        </p>
      </div>
    );
  }

  return (
    <div className="text-white p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={fetchPendingUsers}
          className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-sm"
        >
          Refresh
        </button>
      </div>

      {isLoadingPendingUsers ? (
        <p className="text-gray-400">Loading pending requests...</p>
      ) : pendingUsers.length === 0 ? (
        <p className="text-gray-400">No pending registration requests.</p>
      ) : (
        <div className="space-y-4">
          {pendingUsers.map((user) => (
            <div
              key={user._id}
              className="border border-gray-700 rounded-lg p-4 bg-[#111111]"
            >
              <div className="mb-3">
                <p className="font-semibold">{user.fullname}</p>
                <p className="text-gray-400 text-sm">{user.email}</p>
                <p className="text-gray-400 text-sm">{user.collegeName}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => approveUser(user._id, "student")}
                  className="px-3 py-2 rounded bg-blue-600 hover:bg-blue-500 text-sm"
                >
                  Approve as Student
                </button>
                <button
                  onClick={() => approveUser(user._id, "mentor")}
                  className="px-3 py-2 rounded bg-purple-600 hover:bg-purple-500 text-sm"
                >
                  Approve as Mentor
                </button>
                <button
                  onClick={() => rejectUser(user._id)}
                  className="px-3 py-2 rounded bg-red-600 hover:bg-red-500 text-sm"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
