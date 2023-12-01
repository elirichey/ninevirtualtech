const OfficeCloudData = {
  pageTitle: "Office Cloud",
  overview: "",
  howItWorks: [
    {
      step: "1",
      title: "We Create Your Personalized vOffice Hosted Desktop",
      description:
        "We create your businesses’ personalized vOffice hosted desktop using the latest software available from Microsoft, Adobe, Apple, and Google. All employees receive identical hosted desktops. This ensures a uniform work experience and makes  training and support much easier to manage. Your vOffice hosted desktop will be backed up nightly and all software will be updated on a monthly basis. This service is more than just image hosting or backing up the day’s files – you’ll have a virtual IT staff. For example, as new software is released, we provide your staff with advanced training before the product is implemented so the entire office runs more smoothly.",
    },
    {
      step: "2",
      title: "Access Your vOffice Hosted Desktop Securely",
      description:
        "We migrate your data over to our secure facilities and perform an audit of your files. We then advise you if we see anything we would recommend modifying or restructuring. This is to ensure your files are organized as logically and securely as possible. Rest assured, your data still remains your property! We also set up all of the necessary employee accounts and email on the virtual desktops, if you choose to host your email with us.",
    },
    {
      step: "3",
      title: "Access Your vOffice Hosted Desktop Securely",
      description:
        "Security is our top priority at Nine Virtual Technologies, Inc. You can access your vOffice hosted desktop from numerous devices including iPhone, iPad, and Android phones, as well as your existing PC or laptop. Connections to your vOffice hosted desktop are made through a Secure Socket Layer (SSL) connection.  An SSL connection creates a private, encrypted tunnel through the internet from your device to the vOffice hosted desktop. This ensures your data is safe from hackers. Our servers also provide email encryption, allowing for full HIPPA compliance and keeping your information secure, thus providing additional peace of mind.",
    },
    {
      step: "4",
      title: "Work With Peace of Mind",
      description:
        "You can work in your vOffice hosted desktop knowing that Nine Virtual Technologies staff is managing your environment. For instance, your virtual desktops can connect to each other. This is important because as your company grows, any new computers you add will match the parameters of the existing units. This way we can save you time, money and trouble in the short term and long term. We provide day-to-day support by telephone, email or our support portal. Your virtual computer service also includes features like virus removal, program support and general assistance for one monthly fee. Should you decide to cancel the service at the end of your term, you’ll never experience a data hostage situation’ since everything you stored with us is returned to you.",
    },
  ],
  plans: [
    {
      name: "Hosted Desktops Standard",
      package: "vOffice™ Bronze Package",
      // Rich text
      price: "Starting at $85 / user / month",
      description:
        "This is a solution for companies that want to have us host everything – not just applications, but each user’s entire desktop. Each user gets a Windows desktop just like they are used to, and access to all company documents and applications you wish to assign them to. When we host each user’s entire desktop, you no longer need to maintain any infrastructure at all, apart from providing an access device and Internet access.  You no longer need to worry about backups, disaster recovery, upgrades and patches, or virus definitions; and users can move seamlessly from a PC at work to a Mac at home, picking up where they left off, without ever downloading sensitive company information to a personal device.",
      // Rich text
      includes: [
        {
          description:
            "An individual Windows 2019 desktop for each user that is accessible from any device or web browser.",
        },
        {
          description:
            "High performance – even though the desktop and applications are hosted in our datacenter, it feels like it’s installed locally.",
        },
        {
          description: "Nightly snapshots of the desktops and your data",
        },
        {
          description:
            "Management and support – We ensure each desktop and all applications are always up to date. We provide 24/7 security monitoring, access audits and controls, and respond quickly to user support by logging directly into a user’s session so we see what they see and can proactively fix problems.",
        },
        {
          description:
            "We maintain a Service Level Agreement (SLA) for all Hosted Desktop offerings.  Read more about it here.",
        },
      ],
    },
    {
      name: "Hosted Desktops Advanced",
      package: "vOffice™ Platinum Package",
      // Rich text
      price: "Starting at $125 / user / month",
      description:
        "Building on the vOffice Bronze package, this is a solution for companies that use powerful, advanced software requiring advanced processing, 3D graphics, and independent, stand alone desktops with Windows 10 as the operating system.",
      // Rich text
      includes: [
        {
          description:
            "An individual Windows 10 desktop with Nvidia 3D graphics for each user that is accessible from any device or web browser.",
        },
        { description: "Office 365 Supported" },
        {
          description:
            "Advanced USB 3.0 support.  Redirect Office Scanners, web cameras, and other devices, plus the ability to seamlessly transfer files between the cloud and local computer.",
        },
        {
          description:
            "Management and support – We ensure each desktop and all applications are always up to date. We provide 24/7 security monitoring, access audits and controls, and respond quickly to user support by logging directly into a user’s session so we see what they see and can proactively fix problems.",
        },
        {
          description:
            "We maintain a Service Level Agreement (SLA) for all Hosted Desktop offerings.  Read more about it here.",
        },
      ],
    },
    {
      name: "Industry-Specific Solutions",
      package: undefined,
      // Rich text
      price: "Contact Us for Pricing",
      description:
        "This is a solution for companies that want to have us host everything – not just applications, but each user’s entire desktop. Each user gets a Windows desktop just like they are used to, and access to all company documents and applications you wish to assign them to. When we host each user’s entire desktop, you no longer need to maintain any infrastructure at all, apart from providing an access device and Internet access.  You no longer need to worry about backups, disaster recovery, upgrades and patches, or virus definitions; and users can move seamlessly from a PC at work to a Mac at home, picking up where they left off, without ever downloading sensitive company information to a personal device.",
      // Rich text
      includes: [
        { description: "Solutions for Medical Practices" },
        { description: "Solutions for Dental Practices" },
        { description: "Solutions for Retailers" },
        { description: "Filemaker Pro Hosting" },
        { description: "Disaster Recovery" },
        { description: "Hybrid Cloud" },
        { description: "Consulting" },
        { description: "24/7 Security Monitoring" },
        {
          description:
            "We maintain a Service Level Agreement (SLA) for all Hosted Desktop offerings.  Read more about it here.",
        },
      ],
    },
  ],
};

export default OfficeCloudData;
