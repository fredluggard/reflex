import React from 'react';

function UserDetails({ user }) {
  return (
    <main className='flex justify-between w-full text-gray-500'>
      <section className="flex flex-col w-[50%] md:w-[25%] items-center pt-4">
        <img src="/images/profile-pic.png" alt="User profile" className="w-[60%] rounded-full" />
        <button className="mt-2 border border-[#DF3442] text-sm md:text-base rounded-xl px-8 md:px-12">Edit profile</button>
      </section>
      <section>
        <div className='flex flex-col items-center border border-[#DF3442] px-16 md:px-72 py-2 rounded-2xl md:rounded-3xl mb-2'>
          <p>Name</p>
          <p>{user.name || 'Not Available'}</p>
        </div>
        <div className='flex flex-col items-center border border-[#DF3442] px-16 md:px-64 py-2 rounded-2xl md:rounded-3xl mb-2'>
          <p>Blood type</p>
          <span>{user.bloodtype || 'Not Available'}</span>
        </div>
        <div className='flex flex-col items-center border border-[#DF3442] px-16 md:px-64 py-2 rounded-2xl md:rounded-3xl mb-2'>
          <p>Genotype</p>
          <span>{user.genotype || 'Not Available'}</span>
        </div>
      </section>
    </main>
  );
}

export default UserDetails;
