import {defineConfig} from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    ignoreDeadLinks: true,
    title: "গিট গাইড",
    description:
        "একটি বিগেনার ফ্রেন্ডলি গিট কোর্স | আমরা যারা একদম নতুন তাদের সহজ ভাষায় গিট শিখানোর চেষ্টা করি ।",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: "হোম পেজ", link: "/"},
            {text: "ডকুমেন্টেশন", link: "/introduction/what-is-git"},
            {text: "টিম", link: "/team"},
        ],

        sidebar: [
            {
                text: '০১. পরিচিতি',
                collapsed: true,
                items: [
                    {text: 'গিট কি এবং কেন?', link: '/introduction/what-is-git'},
                    {text: 'কেন গিট ব্যবহার করবেন?', link: '/introduction/why-use-git'}
                ]
            },
            {
                text: '০২. ইনস্টলেশন ও কনফিগারেশন',
                collapsed: true,
                items: [
                    {text: 'গিট ইনস্টল করা', link: '/installation-and-config/installing-git'},
                    {text: 'প্রাথমিক কনফিগারেশন', link: '/installation-and-config/initial-configuration'},
                ]
            },
            {
                text: '০৩. রিপোজিটরি তৈরি',
                collapsed: true,
                items: [
                    {text: 'নতুন রিপোজিটরি তৈরি করা', link: '/create-repository/init-new-repo'},
                    {text: 'গিট ডিরেক্টরি স্ট্রাকচার', link: '/create-repository/git-directory-structure'},
                ]
            },
            {
                text: '০৪. গিটের বেসিক কমান্ড',
                collapsed: true,
                items: [
                    {text: 'গিট অ্যাড', link: '/basic-git-commands/git-add'},
                    {text: 'গিট কমিট', link: '/basic-git-commands/git-commit'},
                    {text: 'গিট স্ট্যাটাস', link: '/basic-git-commands/git-status'},
                ]
            },
            {
                text: '০৫. গিট স্ট্যাটাস ও লগ দেখা',
                collapsed: true,
                items: [
                    {text: 'স্টেটাস চেক করা', link: '/git-status-and-log/checking-status'},
                    {text: 'লগ দেখা', link: '/git-status-and-log/viewing-log'},
                ]
            },
            {
                text: '০৬. স্টেজিং ও কমিট করা',
                collapsed: true,
                items: [
                    {text: 'ফাইল স্টেজ করা', link: '/staging-and-committing/staging-files'},
                    {text: 'কমিট মেসেজ সহ কমিট করা', link: '/staging-and-committing/committing-with-message'},
                    {text: 'কমিটের বেস্ট প্র্যাকটিস', link: '/staging-and-committing/commit-best-practices'},
                ]
            },
            {
                text: '০৭. ব্রাঞ্চ ব্যবস্থাপনা',
                collapsed: true,
                items: [
                    {text: 'ব্রাঞ্চ তৈরি করা', link: '/branches/creating-branches'},
                    {text: 'ব্রাঞ্চ পরিবর্তন করা', link: '/branches/switching-branches'},
                    {text: 'ব্রাঞ্চ মুছে ফেলা', link: '/branches/deleting-branches'},
                ]
            },
            {
                text: '০৮. ব্রাঞ্চ মার্জিং',
                collapsed: true,
                items: [
                    {text: 'গিট মার্জ', link: '/merging-branches/git-merge'},
                    {text: 'ফাস্ট ফরওয়ার্ড বনাম নো-এফএফ', link: '/merging-branches/fast-forward-vs-no-ff'},
                ]
            },
            {
                text: '০৯. মার্জ কনফ্লিক্ট ও সমাধান',
                collapsed: true,
                items: [
                    {text: 'মার্জ কনফ্লিক্ট কি', link: '/merge-conflicts/what-is-merge-conflict'},
                    {text: 'মার্জ কনফ্লিক্ট সমাধান করা', link: '/merge-conflicts/resolve-conflict'},
                    {text: 'মার্জ কনফ্লিক্ট উদাহরণ', link: '/merge-conflicts/conflict-example'},
                ]
            },
            {
                text: '১০. রিমোট রিপোজিটরি',
                collapsed: true,
                items: [
                    {text: 'রিমোট যোগ করা', link: '/remote-repositories/add-remote'},
                    {text: 'রিমোট মুছে ফেলা', link: '/remote-repositories/remove-remote'},
                    {text: 'ফেচ বনাম পুল', link: '/remote-repositories/fetch-vs-pull'},
                ]
            },
            {
                text: '১১. ক্লোন ও পুল',
                collapsed: true,
                items: [
                    {text: 'গিট ক্লোন', link: '/clone-and-pull/git-clone'},
                    {text: 'গিট পুল', link: '/clone-and-pull/git-pull'},
                ]
            },
            {
                text: '১২. রিমোটে পুশ করা',
                collapsed: true,
                items: [
                    {text: 'গিট পুশ', link: '/push-to-remote/git-push'},
                    {text: 'গিট পুশ উইথ ফোর্স', link: '/push-to-remote/push-with-force'}
                ]
            },
            {
                text: '১৩. রিবেস ব্যবহার',
                collapsed: true,
                items: [
                    {text: 'রিবেস কি', link: '/rebase/what-is-rebase'},
                    {text: 'ইন্টারঅ্যাকটিভ রিবেস', link: '/rebase/interactive-rebase'},
                    {text: 'রিবেস বনাম মার্জ', link: '/rebase/rebase-vs-merge'},
                ]
            },
            {
                text: '১৪. ট্যাগ ব্যবহার',
                collapsed: true,
                items: [
                    {text: 'ট্যাগ তৈরি করা', link: '/tags/create-tag'},
                    {text: 'অ্যানোটেটেড বনাম লাইটওয়েট ট্যাগ', link: '/tags/annotated-vs-lightweight'},
                    {text: 'ট্যাগ মুছে ফেলা এবং পুশ করা', link: '/tags/delete-and-push-tag'},
                ]
            },
            {
                text: '১৫. পূর্বাবস্থা ফিরিয়ে নেওয়া',
                collapsed: true,
                items: [
                    {text: 'শেষ কমিট আনডু করা', link: '/undo-and-reset/undo-last-commit'},
                    {text: 'সফট, মিক্সড, হার্ড রিসেট', link: '/undo-and-reset/soft-mixed-hard-reset'},
                    {text: 'রিভার্ট বনাম রিসেট', link: '/undo-and-reset/revert-vs-reset'},
                ]
            },
            {
                text: '১৬. টিপস ও শর্টকাট',
                collapsed: true,
                items: [
                    {text: 'উপকারী এলিয়াস', link: '/tips-and-shortcuts/useful-aliases'},
                    {text: 'gitignore বেস্ট প্র্যাকটিস', link: '/tips-and-shortcuts/gitignore-best-practices'},
                ]
            },
            {
                text: '১৭. বাস্তব ওয়ার্কফ্লো উদাহরণ',
                collapsed: true,
                items: [
                    {text: 'ফিচার ব্রাঞ্চ ওয়ার্কফ্লো', link: '/real-life-workflows/feature-branch-workflow'},
                    {text: 'ফর্ক এবং পুল রিকুয়েস্ট', link: '/real-life-workflows/fork-and-pull-request'},
                ]
            },
            {
                text: '১৮. উপসংহার ও রিসোর্স',
                collapsed: true,
                items: [
                    {text: 'সারসংক্ষেপ', link: '/conclusion/summary'},
                    {text: 'রিসোর্স', link: '/conclusion/resources'},
                    { text: '', link: '/conclusion/git-commands-cheatsheet' },
                ]
            }
        ],

        socialLinks: [
            {icon: "github", link: "https://github.com/polashmahmud/php"},
            {
                icon: "facebook",
                link: "https://www.facebook.com/learnwithpolashmahmud",
            },
            {icon: "youtube", link: "https://www.youtube.com/polashmahmud4"},
            {icon: "linkedin", link: "https://www.linkedin.com/in/polashmahmud4/"},
            {icon: "discord", link: "https://discord.gg/mktPP7n9xp"},
            {icon: "x", link: "https://twitter.com/polashmahmud4"},
        ],

        footer:
            {
                message: "Released under the MIT License.",
                copyright:
                    "Copyright © 2023-present Polash Mahmud",
            }
        ,

        lastUpdated: {
            text: "Updated at",
            formatOptions:
                {
                    dateStyle: "full",
                    timeStyle:
                        "medium",
                }
            ,
        }
        ,

        search: {
            provider: "local",
        }
        ,
    },
})
;
