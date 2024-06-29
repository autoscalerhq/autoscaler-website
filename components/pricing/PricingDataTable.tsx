import {PricingPlan} from "@/components/pricing/ComparePlanCard";

const PLANS: Record<string, PricingPlan> = {
    free: {
        title: 'Free',
        linkText: 'Get Started',
        linkUrl: 'https://csgrader.com',
        core: {
            'number-of-courses': '2',
            assignments: '20 assignments per course',
            'teachers-and-tas': '1',
            'programming-assignments': true,
            'paperbubble-assignments': false
        },
        features: {
            'anomily-detention': true,
            'grading-alerts': true,
            'in-appcode-review': true,
            'custom-assignments': true,
            rubrics: true,
            feedback: true,
            'github-intergration': true,
            'course-templates': true,
            'assignment-templates': true,
            regrade: true,
            'assignment-statistics': true,
            'code-based-rubrics': true
        },
        advancedFeatures: {
            'calendar-integrations': false,
            'manual-data-export': false,
            'quizes-based-on-markdown': false,
            'database-assignment': false,
            'client-server-assignment': false,
            'datascience-assignment': false,
            'collabortative-grading': false,
            'code-similarity': false,
            'see-students-program-inapp': false,
            'in-app-code-comment': false,
            'group-projects': false,
            'organization-analytics': false,
            'course-template-analytics': false,
            'assignment-template-analytics': false,
            'automation-data-sync': false,
            'lms-intergration': false,
            'code-similarity-search': false,
            'gui-assignments': false,
            'azure-deveops': false,
            'gitlab-integration': false
        },
        security: {
            'audit-logs': false,
            rbac: false,
            sso: false,
            ad: false,
            'custom-subdomain': false,
            'matlab-assignments': false,
            'dedicated-onboarding-and-training': false
        },
        support: {
            'assignment-management': false,
            courseretention: '90 days',
            gradingsla: 'Less than 30 minutes',
            initialSupportSla: '10 business days',
            support: 'Community Discord',
            prioritySupport: false
        }
    },
    educator: {
        title: 'Educator',
        linkText: 'Get Started',
        linkUrl: 'https://csgrader.com',
        core: {
            'number-of-courses': '5',
            assignments: 'Unlimited',
            'teachers-and-tas': '5',
            'programming-assignments': true,
            'paperbubble-assignments': false
        },
        features: {
            'anomily-detention': true,
            'grading-alerts': true,
            'in-appcode-review': true,
            'custom-assignments': true,
            rubrics: true,
            feedback: true,
            'github-intergration': true,
            'course-templates': true,
            'assignment-templates': true,
            regrade: true,
            'assignment-statistics': true,
            'code-based-rubrics': true
        },
        advancedFeatures: {
            'calendar-integrations': true,
            'manual-data-export': true,
            'quizes-based-on-markdown': true,
            'database-assignment': true,
            'client-server-assignment': true,
            'datascience-assignment': true,
            'collabortative-grading': true,
            'code-similarity': true,
            'see-students-program-inapp': true,
            'in-app-code-comment': true,
            'group-projects': false,
            'organization-analytics': false,
            'course-template-analytics': false,
            'assignment-template-analytics': false,
            'automation-data-sync': false,
            'lms-intergration': false,
            'code-similarity-search': false,
            'gui-assignments': false,
            'azure-deveops': false,
            'gitlab-integration': false
        },
        security: {
            'audit-logs': false,
            rbac: false,
            sso: false,
            ad: false,
            'custom-subdomain': false,
            'matlab-assignments': false,
            'dedicated-onboarding-and-training': false
        },
        support: {
            'assignment-management': false,
            courseretention: '1 year',
            gradingsla: 'Less than 20 minutes',
            initialSupportSla: '5 business days',
            support: 'Community Discord',
            prioritySupport: false
        }
    },
    bootcamps: {
        title: 'Bootcamps',
        linkText: 'Get Started',
        linkUrl: 'https://csgrader.com',
        core: {
            'number-of-courses': 'Unlimited',
            assignments: 'Unlimited',
            'teachers-and-tas': 'Unlimited',
            'programming-assignments': true,
            'paperbubble-assignments': false
        },
        features: {
            'anomily-detention': true,
            'grading-alerts': true,
            'in-appcode-review': true,
            'custom-assignments': true,
            rubrics: true,
            feedback: true,
            'github-intergration': true,
            'course-templates': true,
            'assignment-templates': true,
            regrade: true,
            'assignment-statistics': true,
            'code-based-rubrics': true
        },
        advancedFeatures: {
            'calendar-integrations': true,
            'manual-data-export': true,
            'quizes-based-on-markdown': true,
            'database-assignment': true,
            'client-server-assignment': true,
            'datascience-assignment': true,
            'collabortative-grading': true,
            'code-similarity': true,
            'see-students-program-inapp': true,
            'in-app-code-comment': true,
            'group-projects': true,
            'organization-analytics': true,
            'course-template-analytics': true,
            'assignment-template-analytics': true,
            'automation-data-sync': true,
            'lms-intergration': true,
            'code-similarity-search': true,
            'gui-assignments': true,
            'azure-deveops': true,
            'gitlab-integration': true
        },
        security: {
            'audit-logs': false,
            rbac: false,
            sso: false,
            ad: false,
            'custom-subdomain': false,
            'matlab-assignments': false,
            'dedicated-onboarding-and-training': false
        },
        support: {
            'assignment-management': '$',
            courseretention: '1 year',
            gradingsla: 'Less than 10 minutes',
            initialSupportSla: '3 business days',
            support: 'Email + Discord + Dedicated Slack/Teams channel',
            prioritySupport: 'At an additional price'
        }
    },
    Enterprise: {
        title: 'Enterprise',
        linkText: 'Get Started',
        linkUrl: 'https://csgrader.com',
        core: {
            'number-of-courses': 'Unlimited',
            assignments: 'Unlimited',
            'teachers-and-tas': 'Unlimited',
            'programming-assignments': true,
            'paperbubble-assignments': false
        },
        features: {
            'anomily-detention': true,
            'grading-alerts': true,
            'in-appcode-review': true,
            'custom-assignments': true,
            rubrics: true,
            feedback: true,
            'github-intergration': true,
            'course-templates': true,
            'assignment-templates': true,
            regrade: true,
            'assignment-statistics': true,
            'code-based-rubrics': true
        },
        advancedFeatures: {
            'calendar-integrations': true,
            'manual-data-export': true,
            'quizes-based-on-markdown': true,
            'database-assignment': true,
            'client-server-assignment': true,
            'datascience-assignment': true,
            'collabortative-grading': true,
            'code-similarity': true,
            'see-students-program-inapp': true,
            'in-app-code-comment': true,
            'group-projects': true,
            'organization-analytics': true,
            'course-template-analytics': true,
            'assignment-template-analytics': true,
            'automation-data-sync': true,
            'lms-intergration': true,
            'code-similarity-search': true,
            'gui-assignments': true,
            'azure-deveops': true,
            'gitlab-integration': true
        },
        security: {
            'audit-logs': true,
            rbac: true,
            sso: true,
            ad: true,
            'custom-subdomain': true,
            'matlab-assignments': true,
            'dedicated-onboarding-and-training': true
        },
        support: {
            'assignment-management': '$',
            courseretention: '1 year',
            gradingsla: 'Less than 10 minutes',
            initialSupportSla: '3 business days',
            support: 'Email + Discord + Dedicated Slack/Teams channel',
            prioritySupport: 'At an additional price'
        }
    }
};

const LABELS = [
    {
        title: 'Core',
        items: {
            'number-of-courses': 'Number of Concurrent Courses',
            assignments: 'Assignments',
            'teachers-and-tas': 'Teachers & TAs',
            'programming-assignments': 'Programing Assignments',
            'paperbubble-assignments': 'Paper Assignments '
        }
    },
    {
        title: 'In-App Features',
        items: {
            'anomily-detention': 'Anomily Detection',
            'grading-alerts': 'Grading Alerts',
            'in-appcode-review': 'In-app code Review ',
            'custom-assignments': 'Custom Assignments',
            rubrics: 'Rubrics',
            feedback: 'Feedback',
            'github-intergration': 'Github Integration',
            'course-templates': 'Course Templates',
            'assignment-templates': 'Assignment Templates',
            regrade: 'Regrade',
            'assignment-statistics': 'Assignment Statistics',
            'code-based-rubrics': 'Code Based Rubrics'
        }
    },
    {
        title: 'Advanced Features',
        items: {
            'calendar-integrations': 'Calendar Integrations',
            'manual-data-export': 'Manual Data Export',
            'quizes-based-on-markdown': 'Quizzes Based on Markdown',
            'database-assignment': 'Database Assignment',
            'client-server-assignment': 'Client/Server Assignments',
            'datascience-assignment': 'DataScience Assignments',
            'collabortative-grading': 'Collaborative Grading',
            'code-similarity': 'Code Similarity',
            'see-students-program-inapp': 'See students program In-app ',
            'in-app-code-comment': 'In-app code comments',
            'group-projects': 'Group Projects',
            'organization-analytics': 'Organization Analytics',
            'course-template-analytics': 'Course Template Analytics',
            'assignment-template-analytics': 'Assignment Template Analytics',
            'automation-data-sync': 'Automatic Data Sync (S3)',
            'lms-intergration': 'LMS Integration',
            'code-similarity-search': 'Code Similarity Search',
            'gui-assignments': 'GUI Assignments',
            'azure-deveops': 'Azure Devops',
            'gitlab-integration': 'Gitlab Integration'
        }
    },
    {
        title: 'Security',
        items: {
            'audit-logs': 'Audit Logs',
            rbac: 'RBAC',
            sso: 'SSO Integration',
            ad: 'AD Integration',
            'custom-subdomain': 'Custom Subdomain',
            'matlab-assignments': 'Matlab Assignments',
            'dedicated-onboarding-and-training': 'Dedicated Onboarding/Training'
        }
    },
    {
        title: 'Support',
        items: {
            'assignment-management': 'Assignment Management',
            courseretention: 'Course Retention',
            gradingsla: 'Grading SLA',
            initialSupportSla: 'Support SLA',
            support: 'Support Channels',
            prioritySupport: 'Priority Support'
        }
    }
];

export { PLANS, LABELS };
