export default function() {
  return [
    {
      title: "dashboard",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">apps</i>',
      htmlAfter: ""
    },

    {
      title: "meetups",
      htmlBefore: '<i class="material-icons">group</i>',
      to: "/meetups",
    },
    {
      title: "new Post",
      htmlBefore: '<i class="material-icons">edit</i>',
      to: "/add-new-post",
    },
    {
      title: "profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "tutorials",
      htmlBefore: '<i class="material-icons">school</i>',
      to: "/tutorials",
    }
  
  ];
}
