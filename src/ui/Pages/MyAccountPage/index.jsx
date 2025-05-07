import Avatar from '../../../assets/Images/Avatar.png';

const MyAccountPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 lg:px-8 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10">My Account</h1>
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row md:items-start gap-6 md:gap-8">

        <div className="w-full md:w-1/4 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-6">
            <img
              src={Avatar}
              alt="Profile"
              className="rounded-full w-20 h-20 object-cover"
            />
            <p className="mt-4 font-semibold text-center">Sofia Havertz</p>
          </div>

          <div className="space-y-2">
            {['Account', 'Address', 'Orders', 'Wishlist'].map((label) => (
              <button
                key={label}
                className="block w-full text-left py-2 px-4 rounded hover:bg-gray-200 font-medium"
              >
                {label}
              </button>
            ))}
            <button className="block w-full text-left py-2 px-4 rounded hover:bg-gray-200 font-medium text-red-600">
              Log Out
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Account Details</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">First Name</label>
                <input
                  required
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Display Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Display name"
              />
              <p className="text-sm text-gray-500 mt-1">
                This will be how your name will be displayed in the account section and in reviews.
              </p>
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Email"
              />
            </div>

            <h3 className="text-lg font-semibold mt-8">Password</h3>

            <div>
              <label className="block mb-1 font-medium">Old Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Old password"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">New Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="New password"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Repeat New Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Repeat new password"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition"
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
