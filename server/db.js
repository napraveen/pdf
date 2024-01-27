const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Your email address is required'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Your username is required'],
  },
  password: {
    type: String,
    required: [true, 'Your password is required'],
  },
  category: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
  },
  section: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const publicPosts = [
  {
    title: 'Free Tips on Development',
    content: 'These are some tips',
  },
];

const privatePosts = [
  {
    title: 'Paid Tips on Development',
    content: 'These are some tips',
  },
];

const studentSchema = new mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  students: [
    {
      I: [
        {
          A: [
            {
              name: {
                type: String,
                required: false,
              },
              year: {
                type: String,
                required: false,
              },
              department: {
                type: String,
                required: false,
              },
              section: {
                type: String,
                required: false,
              },
              departmentId: {
                type: String,
                required: false,
              },
              category: {
                type: String,
                required: false,
              },
              email: {
                type: String,
                required: false,
              },
              username: {
                type: String,
                required: false,
              },

              rollNo: {
                type: String,
                required: false,
              },
              registerNo: {
                type: String,
                required: false,
              },
              mobileNo: {
                type: String,
                required: false,
              },
              presentCount: {
                type: Number,
                default: 0,
              },
              absentCount: {
                type: Number,
                default: 0,
              },
              medicalLeave: {
                type: Number,
                default: 0,
              },
              previledgeLeave: {
                type: Number,
                default: 0,
              },
              presentDates: [
                {
                  type: String,
                },
              ],
              absentDates: [
                {
                  type: String,
                },
              ],
              unAppliedDates: [
                {
                  type: String,
                },
              ],
              acceptedDates: [
                {
                  type: String,
                },
              ],
            },
          ],
          B: [
            {
              name: {
                type: String,
                required: false,
              },
              year: {
                type: String,
                required: false,
              },
              department: {
                type: String,
                required: false,
              },
              section: {
                type: String,
                required: false,
              },
              departmentId: {
                type: String,
                required: false,
              },
              category: {
                type: String,
                required: false,
              },
              email: {
                type: String,
                required: false,
              },
              username: {
                type: String,
                required: false,
              },
              rollNo: {
                type: String,
                required: false,
              },
              registerNo: {
                type: String,
                required: false,
              },
              mobileNo: {
                type: String,
                required: false,
              },
              presentCount: {
                type: Number,
                default: 0,
              },
              absentCount: {
                type: Number,
                default: 0,
              },
              medicalLeave: {
                type: Number,
                default: 0,
              },
              previledgeLeave: {
                type: Number,
                default: 0,
              },
              presentDates: [
                {
                  type: String,
                },
              ],
              absentDates: [
                {
                  type: String,
                },
              ],
              unAppliedDates: [
                {
                  type: String,
                },
              ],
              acceptedDates: [
                {
                  type: String,
                },
              ],
            },
          ],
          C: [
            {
              name: {
                type: String,
                required: false,
              },
              year: {
                type: String,
                required: false,
              },
              department: {
                type: String,
                required: false,
              },
              section: {
                type: String,
                required: false,
              },
              departmentId: {
                type: String,
                required: false,
              },
              category: {
                type: String,
                required: false,
              },
              email: {
                type: String,
                required: false,
              },
              username: {
                type: String,
                required: false,
              },
              rollNo: {
                type: String,
                required: false,
              },
              registerNo: {
                type: String,
                required: false,
              },
              mobileNo: {
                type: String,
                required: false,
              },
              presentCount: {
                type: Number,
                default: 0,
              },
              absentCount: {
                type: Number,
                default: 0,
              },
              medicalLeave: {
                type: Number,
                default: 0,
              },
              previledgeLeave: {
                type: Number,
                default: 0,
              },
              presentDates: [
                {
                  type: String,
                },
              ],
              absentDates: [
                {
                  type: String,
                },
              ],
              unAppliedDates: [
                {
                  type: String,
                },
              ],
              acceptedDates: [
                {
                  type: String,
                },
              ],
            },
          ],
        },
      ],
      II: [
        {
          A: [
            {
              name: {
                type: String,
                required: false,
              },
              year: {
                type: String,
                required: false,
              },
              department: {
                type: String,
                required: false,
              },
              section: {
                type: String,
                required: false,
              },
              departmentId: {
                type: String,
                required: false,
              },
              category: {
                type: String,
                required: false,
              },
              email: {
                type: String,
                required: false,
              },
              username: {
                type: String,
                required: false,
              },
              rollNo: {
                type: String,
                required: false,
              },
              registerNo: {
                type: String,
                required: false,
              },
              mobileNo: {
                type: String,
                required: false,
              },
              presentCount: {
                type: Number,
                default: 0,
              },
              absentCount: {
                type: Number,
                default: 0,
              },
              medicalLeave: {
                type: Number,
                default: 0,
              },
              previledgeLeave: {
                type: Number,
                default: 0,
              },
              presentDates: [
                {
                  type: String,
                },
              ],
              absentDates: [
                {
                  type: String,
                },
              ],
              unAppliedDates: [
                {
                  type: String,
                },
              ],
              acceptedDates: [
                {
                  type: String,
                },
              ],
            },
          ],
          B: [
            {
              name: {
                type: String,
                required: false,
              },
              year: {
                type: String,
                required: false,
              },
              department: {
                type: String,
                required: false,
              },
              section: {
                type: String,
                required: false,
              },
              departmentId: {
                type: String,
                required: false,
              },
              category: {
                type: String,
                required: false,
              },
              email: {
                type: String,
                required: false,
              },
              username: {
                type: String,
                required: false,
              },
              rollNo: {
                type: String,
                required: false,
              },
              registerNo: {
                type: String,
                required: false,
              },
              mobileNo: {
                type: String,
                required: false,
              },
              presentCount: {
                type: Number,
                default: 0,
              },
              absentCount: {
                type: Number,
                default: 0,
              },
              medicalLeave: {
                type: Number,
                default: 0,
              },
              previledgeLeave: {
                type: Number,
                default: 0,
              },
              presentDates: [
                {
                  type: String,
                },
              ],
              absentDates: [
                {
                  type: String,
                },
              ],
              unAppliedDates: [
                {
                  type: String,
                },
              ],
              acceptedDates: [
                {
                  type: String,
                },
              ],
            },
          ],
          C: [
            {
              name: {
                type: String,
                required: false,
              },
              year: {
                type: String,
                required: false,
              },
              department: {
                type: String,
                required: false,
              },
              section: {
                type: String,
                required: false,
              },
              departmentId: {
                type: String,
                required: false,
              },
              category: {
                type: String,
                required: false,
              },
              email: {
                type: String,
                required: false,
              },
              username: {
                type: String,
                required: false,
              },
              rollNo: {
                type: String,
                required: false,
              },
              registerNo: {
                type: String,
                required: false,
              },
              mobileNo: {
                type: String,
                required: false,
              },
              presentCount: {
                type: Number,
                default: 0,
              },
              absentCount: {
                type: Number,
                default: 0,
              },
              medicalLeave: {
                type: Number,
                default: 0,
              },
              previledgeLeave: {
                type: Number,
                default: 0,
              },
              presentDates: [
                {
                  type: String,
                },
              ],
              absentDates: [
                {
                  type: String,
                },
              ],
              unAppliedDates: [
                {
                  type: String,
                },
              ],
              acceptedDates: [
                {
                  type: String,
                },
              ],
            },
          ],
        },
      ],
      III: [
        {
          A: [
            {
              name: {
                type: String,
                required: false,
              },
              year: {
                type: String,
                required: false,
              },
              department: {
                type: String,
                required: false,
              },
              section: {
                type: String,
                required: false,
              },
              departmentId: {
                type: String,
                required: false,
              },
              category: {
                type: String,
                required: false,
              },
              email: {
                type: String,
                required: false,
              },
              username: {
                type: String,
                required: false,
              },
              rollNo: {
                type: String,
                required: false,
              },
              registerNo: {
                type: String,
                required: false,
              },
              mobileNo: {
                type: String,
                required: false,
              },
              presentCount: {
                type: Number,
                default: 0,
              },
              absentCount: {
                type: Number,
                default: 0,
              },
              medicalLeave: {
                type: Number,
                default: 0,
              },
              previledgeLeave: {
                type: Number,
                default: 0,
              },
              presentDates: [
                {
                  type: String,
                },
              ],
              absentDates: [
                {
                  type: String,
                },
              ],
              unAppliedDates: [
                {
                  type: String,
                },
              ],
              acceptedDates: [
                {
                  type: String,
                },
              ],
            },
          ],
          B: [
            {
              name: {
                type: String,
                required: false,
              },
              year: {
                type: String,
                required: false,
              },
              department: {
                type: String,
                required: false,
              },
              section: {
                type: String,
                required: false,
              },
              departmentId: {
                type: String,
                required: false,
              },
              category: {
                type: String,
                required: false,
              },
              email: {
                type: String,
                required: false,
              },
              username: {
                type: String,
                required: false,
              },
              rollNo: {
                type: String,
                required: false,
              },
              registerNo: {
                type: String,
                required: false,
              },
              mobileNo: {
                type: String,
                required: false,
              },
              presentCount: {
                type: Number,
                default: 0,
              },
              absentCount: {
                type: Number,
                default: 0,
              },
              medicalLeave: {
                type: Number,
                default: 0,
              },
              previledgeLeave: {
                type: Number,
                default: 0,
              },
              presentDates: [
                {
                  type: String,
                },
              ],
              absentDates: [
                {
                  type: String,
                },
              ],
              unAppliedDates: [
                {
                  type: String,
                },
              ],
              acceptedDates: [
                {
                  type: String,
                },
              ],
            },
          ],
          C: [
            {
              name: {
                type: String,
                required: false,
              },
              year: {
                type: String,
                required: false,
              },
              department: {
                type: String,
                required: false,
              },
              section: {
                type: String,
                required: false,
              },
              departmentId: {
                type: String,
                required: false,
              },
              category: {
                type: String,
                required: false,
              },
              email: {
                type: String,
                required: false,
              },
              username: {
                type: String,
                required: false,
              },
              rollNo: {
                type: String,
                required: false,
              },
              registerNo: {
                type: String,
                required: false,
              },
              mobileNo: {
                type: String,
                required: false,
              },
              presentCount: {
                type: Number,
                default: 0,
              },
              absentCount: {
                type: Number,
                default: 0,
              },
              medicalLeave: {
                type: Number,
                default: 0,
              },
              previledgeLeave: {
                type: Number,
                default: 0,
              },
              presentDates: [
                {
                  type: String,
                },
              ],
              absentDates: [
                {
                  type: String,
                },
              ],
              unAppliedDates: [
                {
                  type: String,
                },
              ],
              acceptedDates: [
                {
                  type: String,
                },
              ],
            },
          ],
        },
      ],
      IV: [
        {
          A: [
            {
              name: {
                type: String,
                required: false,
              },
              year: {
                type: String,
                required: false,
              },
              department: {
                type: String,
                required: false,
              },
              section: {
                type: String,
                required: false,
              },
              departmentId: {
                type: String,
                required: false,
              },
              category: {
                type: String,
                required: false,
              },
              email: {
                type: String,
                required: false,
              },
              username: {
                type: String,
                required: false,
              },
              rollNo: {
                type: String,
                required: false,
              },
              registerNo: {
                type: String,
                required: false,
              },
              mobileNo: {
                type: String,
                required: false,
              },
              presentCount: {
                type: Number,
                default: 0,
              },
              absentCount: {
                type: Number,
                default: 0,
              },
              medicalLeave: {
                type: Number,
                default: 0,
              },
              previledgeLeave: {
                type: Number,
                default: 0,
              },
              presentDates: [
                {
                  type: String,
                },
              ],
              absentDates: [
                {
                  type: String,
                },
              ],
              unAppliedDates: [
                {
                  type: String,
                },
              ],
              acceptedDates: [
                {
                  type: String,
                },
              ],
            },
          ],
          B: [
            {
              name: {
                type: String,
                required: false,
              },
              year: {
                type: String,
                required: false,
              },
              department: {
                type: String,
                required: false,
              },
              section: {
                type: String,
                required: false,
              },
              departmentId: {
                type: String,
                required: false,
              },
              category: {
                type: String,
                required: false,
              },
              email: {
                type: String,
                required: false,
              },
              username: {
                type: String,
                required: false,
              },
              rollNo: {
                type: String,
                required: false,
              },
              registerNo: {
                type: String,
                required: false,
              },
              mobileNo: {
                type: String,
                required: false,
              },
              presentCount: {
                type: Number,
                default: 0,
              },
              absentCount: {
                type: Number,
                default: 0,
              },
              medicalLeave: {
                type: Number,
                default: 0,
              },
              previledgeLeave: {
                type: Number,
                default: 0,
              },
              presentDates: [
                {
                  type: String,
                },
              ],
              absentDates: [
                {
                  type: String,
                },
              ],
              unAppliedDates: [
                {
                  type: String,
                },
              ],
              acceptedDates: [
                {
                  type: String,
                },
              ],
            },
          ],
          C: [
            {
              name: {
                type: String,
                required: false,
              },
              year: {
                type: String,
                required: false,
              },
              department: {
                type: String,
                required: false,
              },
              section: {
                type: String,
                required: false,
              },
              departmentId: {
                type: String,
                required: false,
              },
              category: {
                type: String,
                required: false,
              },
              email: {
                type: String,
                required: false,
              },
              username: {
                type: String,
                required: false,
              },
              rollNo: {
                type: String,
                required: false,
              },
              registerNo: {
                type: String,
                required: false,
              },
              mobileNo: {
                type: String,
                required: false,
              },
              presentCount: {
                type: Number,
                default: 0,
              },
              absentCount: {
                type: Number,
                default: 0,
              },
              medicalLeave: {
                type: Number,
                default: 0,
              },
              previledgeLeave: {
                type: Number,
                default: 0,
              },
              presentDates: [
                {
                  type: String,
                },
              ],
              absentDates: [
                {
                  type: String,
                },
              ],
              unAppliedDates: [
                {
                  type: String,
                },
              ],
              acceptedDates: [
                {
                  type: String,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

const leaveFormSchema = mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  students: [
    {
      year: {
        type: String,
        required: false,
      },
      department: {
        type: String,
        required: false,
      },
      section: {
        type: String,
        required: false,
      },
      email: {
        type: String,
        required: false,
      },
      name: {
        type: String,
        required: false,
      },
      regNo: {
        type: String,
        required: false,
      },
      imgUrl: {
        type: String,
        required: false,
      },
      reason: {
        type: String,
        required: false,
      },
      status: {
        type: String,
        required: false,
      },
      appliedDates: [
        {
          type: String,
        },
      ],

      // file: {
      //   data: Buffer,
      //   contentType: String,
      //   filename: String,
      // },
    },
  ],
});

const submittedDatesSchema = mongoose.Schema({
  departmentId: {
    type: String,
    required: false,
  },
  dates: [
    {
      type: String,
    },
  ],
});
const submittedDates = mongoose.model('SubmittedDates', submittedDatesSchema);
const departments = [
  'ECEA',
  'ECEB',
  'ECEC',
  'MECHA',
  'MECHB',
  'MECHC',
  'EEEA',
  'EEEB',
  'EEEC',
  'ITA',
  'ITB',
  'ITC',
  'CSEA',
  'CSEB',
  'CSEC',
  'ADSA',
  'ADSB',
  'ADSC',
  'AMLA',
  'AMLB',
  'AMLC',
  'CHEMA',
  'CHEMB',
  'CHEMC',
  'BIOA',
  'BIOB',
  'BIOC',
];
// departments.map((item) => {
//   submittedDates.create({
//     departmentId: item,
//   });
// });

const User = mongoose.model('User', userSchema);
const Student = mongoose.model('Student', studentSchema);
const LeaveForm = mongoose.model('LeaveForm', leaveFormSchema);
module.exports = {
  User,
  publicPosts,
  privatePosts,
  Student,
  submittedDates,
  LeaveForm,
};
