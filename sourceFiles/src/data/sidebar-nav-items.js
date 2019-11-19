export default function() {
  return [
    {
      title: "Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">apps</i>',
      htmlAfter: ""
    },

    {
      title: "Meetups",
      htmlBefore: '<i class="material-icons">group</i>',
      to: "/blog-posts",
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
  
  ];
}
