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
      title: "community",
      htmlBefore: '<i class="material-icons">record_voice_over</i>',
      to: "/add-new-post",
    },
   
    {
      title: "tutorials",
      htmlBefore: '<i class="material-icons">school</i>',
      to: "/tutorials",
    },
   {
      title: "profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
  ];
}
