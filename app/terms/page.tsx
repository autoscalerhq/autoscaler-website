import type { Metadata } from 'next';
import Link from 'next/link';

TermsOfService.requireSession = false;

export const metadata: Metadata = {
    title: 'Autoscaler Terms of Service',
    description: 'Terms of Service for Autoscaler website and application'
};

export default function TermsOfService() {
    return (
        <div className={'space-y-6 px-6 py-8 pt-28'}>
            <h1 className={'text-4xl font-bold underline'}>Terms and Conditions for CSGrader</h1>

            <div className={'space-y-4'}>
                <h2 className={'text-3xl font-semibold'}>1. Introduction</h2>
                <p className={'text-lg leading-relaxed text-gray-300'}>
                    Welcome to CSGrader, a website and application operated by Bear Binary Development, LLC (we, us, or our). These Terms and Conditions (Terms) govern your use of the
                    CSGrader website and app, accessible at{' '}
                    <Link href='https://csgrader.org/' className='underline'>
                        https://csgrader.org/
                    </Link>
                    .
                </p>

                <h2 className={'text-3xl font-semibold'}>2. Acceptance of Terms</h2>
                <p className={'text-lg leading-relaxed text-gray-300'}>
                    By accessing or using CSGrader, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of the Terms, you must not use our services.
                </p>

                <h2 className={'text-3xl font-semibold'}>3. Account Registration</h2>
                <p className={'text-lg leading-relaxed text-gray-300'}>
                    To use certain features of CSGrader, you must register for an account. You agree to provide accurate, current, and complete information during the registration process
                    and to update such information to keep it accurate, current, and complete.
                </p>

                <h2 className={'text-3xl font-semibold'}>4. Content Creation and Ownership</h2>
                <h3 className={'text-2xl font-medium'}>4.1 User-Generated Content</h3>
                <p className={'text-lg leading-relaxed text-gray-300'}>
                    You may create, link, or upload content, including text and images (User Content). You retain all rights in, and are solely responsible for, the User Content you post
                    to CSGrader.
                </p>

                <h3 className={'text-2xl font-medium'}>4.2 Proprietary Rights</h3>
                <p className={'text-lg leading-relaxed text-gray-300'}>
                    The visual design, user interface, logos, and trademarks of CSGrader, as well as the underlying technology, are owned by or licensed to Bear Binary Development, LLC and
                    are protected under intellectual property laws. You agree not to infringe upon these proprietary rights.
                </p>

                <h2 className={'text-3xl font-semibold'}>5. Subscription Plans and Pricing</h2>
                <p className={'text-lg leading-relaxed text-gray-300'}>
                    Users may offer subscription plans based on our pricing page. Pricing and subscription details are subject to change.
                </p>

                <h2 className={'text-3xl font-semibold'}>6. User Conduct and Responsibilities</h2>
                <p className={'text-lg leading-relaxed text-gray-300'}>
                    You agree to use CSGrader in accordance with all applicable laws and regulations and not to engage in any activity that is harmful to us, our services, or other users.
                </p>

                <h2 className={'text-3xl font-semibold'}>7. Termination</h2>
                <p className={'text-lg leading-relaxed text-gray-300'}>We reserve the right to suspend or terminate your account if you violate these Terms.</p>

                <h2 className={'text-3xl font-semibold'}>8. Disclaimer of Warranties</h2>
                <p className={'text-lg leading-relaxed text-gray-300'}>CSGrader is provided as is, without warranty of any kind, either express or implied.</p>

                <h2 className={'text-3xl font-semibold'}>9. Limitation of Liability</h2>
                <p className={'text-lg leading-relaxed text-gray-300'}>
                    Bear Binary Development, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                    incurred directly or indirectly.
                </p>

                <h2 className={'text-3xl font-semibold'}>10. Changes to Terms</h2>
                <p className={'text-lg leading-relaxed text-gray-300'}>
                    We reserve the right to modify these Terms at any time. Your continued use of CSGrader after any such changes constitutes your acceptance of the new Terms.
                </p>

                <h2 className={'text-3xl font-semibold'}>11. Contact Us</h2>
                <p className={'text-lg leading-relaxed text-gray-300'}>
                    For any questions regarding these Terms, please contact us at
                    <Link href='mailto:csgrader-support@proxiedmail.com' className='underline'>
                        {' '}
                        csgrader-support@proxiedmail.com
                    </Link>
                    .
                </p>

                <h2 className={'text-3xl font-semibold'}>12. Address</h2>
                <p className={'text-lg leading-relaxed text-gray-300'}>
                    Bear Binary Development, LLC
                    <br />
                    254 CHAPMAN RD STE 208 10565
                    <br />
                    NEWARK, DE 19702
                    <br />
                    United States
                </p>
            </div>
        </div>
    );
}
