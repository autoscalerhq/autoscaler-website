import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Autoscaler Privacy Policy',
    description: 'Privacy Policy for Autoscaler website and application'
};

export default function PrivacyPolicy() {
    return (

            <div className={'space-y-6 px-6 py-8'}>
                <h1 className={'text-4xl font-bold underline'}>Privacy Policy for Autoscaler</h1>
                <p className={'text-lg leading-relaxed text-gray-300'}>Effective date: January 1st, 2024</p>

                <div className={'space-y-4'}>
                    <h2 className={'text-3xl font-semibold'}>1. Introduction</h2>
                    <p className={'text-lg leading-relaxed text-gray-300'}>
                        Welcome to Autoscaler. Bear Binary Development, LLC (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the Autoscaler website and app (the &quot;Service&quot;).
                        This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with
                        that data.
                    </p>

                    <h2 className={'text-3xl font-semibold'}>2. Information Collection and Use</h2>
                    <p className={'text-lg leading-relaxed text-gray-300'}>
                        We collect several different types of information for various purposes to provide and improve our Service to you.
                    </p>

                    <h2 className={'text-3xl font-semibold'}>3. Types of Data Collected</h2>
                    <h3 className={'text-2xl font-medium'}>3.1 Personal Data</h3>
                    <p className={'text-lg leading-relaxed text-gray-300'}>
                        While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal
                        Data&quot;).
                    </p>

                    <h3 className={'text-2xl font-medium'}>3.2 Usage Data</h3>
                    <p className={'text-lg leading-relaxed text-gray-300'}>We may also collect information on how the Service is accessed and used (&quot;Usage Data&quot;).</p>

                    <h2 className={'text-3xl font-semibold'}>4. Use of Data</h2>
                    <p className={'text-lg leading-relaxed text-gray-300'}>
                        Bear Binary Development, LLC uses the collected data for various purposes including to provide and maintain the Service, notify you about changes to our Service, allow
                        you to participate in interactive features of our Service, provide customer support, and monitor the usage of the Service.
                    </p>

                    <h2 className={'text-3xl font-semibold'}>5. Transfer of Data</h2>
                    <p className={'text-lg leading-relaxed text-gray-300'}>
                        Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental
                        jurisdiction where the data protection laws may differ from those of your jurisdiction.
                    </p>

                    <h2 className={'text-3xl font-semibold'}>6. Disclosure of Data</h2>
                    <p className={'text-lg leading-relaxed text-gray-300'}>
                        We may disclose your Personal Data in the belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, prevent or
                        investigate possible wrongdoing in connection with the Service, protect the personal safety of users of the Service, or protect against legal liability.
                    </p>

                    <h2 className={'text-3xl font-semibold'}>7. Security of Data</h2>
                    <p className={'text-lg leading-relaxed text-gray-300'}>
                        The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
                    </p>

                    <h2 className={'text-3xl font-semibold'}>8. Service Providers</h2>
                    <p className={'text-lg leading-relaxed text-gray-300'}>
                        We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related services, or assist us in
                        analyzing how our Service is used.
                    </p>

                    <h2 className={'text-3xl font-semibold'}>9. Links to Other Sites</h2>
                    <p className={'text-lg leading-relaxed text-gray-300'}>
                        Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party&apos;s site.
                    </p>

                    <h2 className={'text-3xl font-semibold'}>10. Changes to This Privacy Policy</h2>
                    <p className={'text-lg leading-relaxed text-gray-300'}>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>

                    <h2 className={'text-3xl font-semibold'}>11. Contact Us</h2>
                    <p className={'text-lg leading-relaxed text-gray-300'}>
                        If you have any questions about this Privacy Policy, please contact us by email at{' '}
                        <Link href='mailto:Autoscaler-support@proxiedmail.com' className='underline'>
                            Autoscaler-support@proxiedmail.com
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
