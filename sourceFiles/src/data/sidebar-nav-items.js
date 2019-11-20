export default function() {
  return [
    {
      title: "Dashboard",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">apps</i>',
      htmlAfter: ""
    },

    {
      title: "Meetups",
      htmlBefore: '<i class="material-icons">group</i>',
      to: "/meetups",
    },
    {
      title: "New Post",
      htmlBefore: '<i class="material-icons">edit</i>',
      to: "/add-new-post",
    },
    {
      title: "Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Tutorials",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/tutorials",
    }
  
  ];
}
