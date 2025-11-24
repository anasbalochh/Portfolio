
  # Portfolio - Muhammad Anas

  A modern, animated portfolio website with a cyberpunk aesthetic featuring:
  - Smooth animations and glitch text effects
  - Modern emerald and teal color scheme
  - Responsive design
  - Contact form integration ready
  - GitHub and LinkedIn links

  ## 🚀 Live Deployment

  **Production URL:** [https://portfolio-anasss.vercel.app](https://portfolio-anasss.vercel.app)

  **GitHub Repository:** [https://github.com/anasbalochh/Portfolio](https://github.com/anasbalochh/Portfolio)

  ## 📦 Tech Stack

  - **Framework:** React 18 + TypeScript
  - **Build Tool:** Vite
  - **Styling:** Tailwind CSS
  - **Animations:** Motion (Framer Motion)
  - **UI Components:** Radix UI + shadcn/ui
  - **Icons:** Lucide React

  ## 🏃 Running Locally

  ```bash
  # Install dependencies
  npm install

  # Start development server
  npm run dev

  # Build for production
  npm run build
  ```

  ## 📧 EmailJS Setup (Contact Form)

  The contact form uses EmailJS to send emails directly from the browser. **All messages will be sent to: `balochanas321@gmail.com`**

  ### Step-by-Step Setup:

  1. **Sign up for EmailJS**: 
     - Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account
     - Free plan allows 200 emails/month

  2. **Create an Email Service**:
     - Go to **Email Services** in your dashboard
     - Click **Add New Service**
     - Choose **Gmail** (recommended) or your email provider
     - **Important**: When setting up Gmail service:
       - Connect your Gmail account (`balochanas321@gmail.com`)
       - Authorize EmailJS to send emails on your behalf
     - After setup, copy your **Service ID** (e.g., `service_xxxxx`)

  3. **Create an Email Template**:
     - Go to **Email Templates** in your dashboard
     - Click **Create New Template**
     - **Template Settings**:
       - **To Email**: `balochanas321@gmail.com` (your email where you'll receive messages)
       - **From Name**: `{{from_name}}` (will show sender's name)
       - **From Email**: `{{from_email}}` (sender's email for reply)
       - **Subject**: `New Message from Portfolio Contact Form`
     - **Email Content** (HTML or plain text):
       ```
       You have received a new message from your portfolio website!
       
       From: {{from_name}}
       Email: {{from_email}}
       
       Message:
       {{message}}
       
       ---
       This message was sent from your portfolio contact form.
       ```
     - **Important**: Make sure to use these exact variable names:
       - `{{from_name}}` - Sender's name
       - `{{from_email}}` - Sender's email address
       - `{{message}}` - Message content
     - Click **Save** and copy your **Template ID** (e.g., `template_xxxxx`)

  4. **Get your Public Key**:
     - Go to **Account** → **General** → **API Keys**
     - Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

  5. **Create Environment Variables**:
     - Create a `.env` file in the root directory (same level as `package.json`)
     - Copy the following template and replace with your actual values:
     ```env
     # EmailJS Configuration
     # Get these values from: https://dashboard.emailjs.com/
     
     # Service ID (from Email Services section)
     # Example format: service_abc123xyz
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     
     # Template ID (from Email Templates section)
     # Example format: template_xyz789abc
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     
     # Public Key (from Account > General > API Keys)
     # Example format: abc123xyz789
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```
     - **Important**: 
       - Replace `your_service_id_here` with your actual Service ID
       - Replace `your_template_id_here` with your actual Template ID
       - Replace `your_public_key_here` with your actual Public Key
       - Do NOT include quotes around the values
       - Do NOT add spaces around the `=` sign

  6. **For Vercel Deployment**:
     - Go to your Vercel project dashboard
     - Navigate to **Settings** → **Environment Variables**
     - Add the same three environment variables:
       - `VITE_EMAILJS_SERVICE_ID`
       - `VITE_EMAILJS_TEMPLATE_ID`
       - `VITE_EMAILJS_PUBLIC_KEY`
     - Redeploy your application after adding the variables

  7. **Restart your development server** after adding the environment variables:
     ```bash
     npm run dev
     ```

  ### Example .env File:

  Here's what your `.env` file should look like (with example values):

  ```env
  VITE_EMAILJS_SERVICE_ID=service_gmail123
  VITE_EMAILJS_TEMPLATE_ID=template_portfolio456
  VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
  ```

  **Note**: 
  - The file should be named exactly `.env` (with the dot at the beginning)
  - Place it in the root directory (same folder as `package.json`)
  - Never commit this file to Git (it's already in `.gitignore`)
  - For production (Vercel), add these same variables in Vercel's environment variables settings

  ### Testing the Contact Form:

  Once configured, test the form by:
  1. Filling out the contact form on your website
  2. Submitting the form
  3. Checking your email inbox (`balochanas321@gmail.com`) for the message
  4. You should receive an email with the sender's name, email, and message

  ### Troubleshooting:

  - **Error: "412 Gmail_API: Request had insufficient authentication scopes"**
    
    This error means your Gmail service in EmailJS doesn't have the proper permissions. Here's how to fix it:
    
    **Solution 1: Reconnect Gmail Service (Recommended)**
    1. Go to EmailJS Dashboard → **Email Services**
    2. Find your Gmail service and click on it
    3. Click **"Reconnect"** or **"Re-authorize"**
    4. When Google asks for permissions, make sure to:
       - ✅ Grant access to "Send email on your behalf"
       - ✅ Grant access to "Manage your email"
       - ✅ Click "Allow" for all requested permissions
    5. Complete the authorization process
    6. Test the form again
    
    **Solution 2: Use EmailJS SMTP Service (Alternative)**
    If Gmail continues to have issues, use EmailJS's built-in SMTP service:
    1. Go to **Email Services** → **Add New Service**
    2. Choose **"EmailJS"** (not Gmail)
    3. This service doesn't require OAuth and works out of the box
    4. Update your Service ID in the `.env` file
    5. The rest of the setup remains the same
    
    **Solution 3: Use a Different Email Provider**
    - Try **Outlook/Hotmail** service instead
    - Or use **SendGrid**, **Mailgun**, or other SMTP services
    - Follow the same template setup process

  - **Emails not received?** 
    - Check spam folder
    - Verify EmailJS service is connected to your email account
    - Check EmailJS dashboard → **Email Logs** to see if emails were sent
    - Verify environment variables are set correctly
    - Make sure the "To Email" in your template is set to `balochanas321@gmail.com`
  
  - **Other error messages?**
    - Make sure all three environment variables are set
    - Verify Service ID, Template ID, and Public Key are correct
    - Check browser console for detailed error messages
    - Verify your EmailJS account hasn't exceeded the free tier limit (200 emails/month)

  **Note**: The form will show error messages if EmailJS is not properly configured. Make sure to complete all setup steps above.

  ## 🌐 Deployment

  This project is deployed on **Vercel** with automatic deployments from the `main` branch.

  ### Custom Domain Setup

  The project is configured with the name **portfolio-anasss** on Vercel.

  To set up a custom domain:

  1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
  2. Select the **portfolio-anasss** project
  3. Go to **Settings** → **Domains**
  4. Add your custom domain (e.g., `portfolio.anasss.com`)
  5. Follow Vercel's DNS configuration instructions

  ### Project Configuration

  - **Output Directory:** `dist`
  - **Build Command:** `npm run build`
  - **Framework:** Vite

  ## 📝 Features

  - ✨ Glitch text animation on hero section
  - 🎨 Modern color scheme (Emerald, Teal, Cyan)
  - 📱 Fully responsive design
  - 🔗 Social media integration (GitHub, LinkedIn)
  - 📧 Contact form with EmailJS integration
  - 🎭 Smooth scroll animations
  - 💼 Projects showcase section
  - 🛠️ Skills and technologies display

  ## 🔗 Links

  - **GitHub:** [@anasbalochh](https://github.com/anasbalochh)
  - **LinkedIn:** [Muhammad Anas](https://www.linkedin.com/in/muhammad-anas-084225331)

  ## 📄 License

  This project is private.

  ---
  Built with ❤️ by Muhammad Anas
  