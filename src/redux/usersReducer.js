import batmanAvatar from './../img/batmanAvatar.jpeg'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {

  users: [
    
    // [
    //   {
    //     id: 1,
    //     avatar:
    //       "https://downloadwap.com/thumbs2/wallpapers/p2/15/games/nuttt6bf.jpg",
    //     followed: false,
    //     fullName: "Брюс Уэйн",
    //     status: "Темный рыцарь",
    //     location: { city: "Gotham", country: "USA" },
    //   },
    //   {
    //     id: 2,
    //     avatar:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ugVvybii64fqePz3VdXGUn2q-QT67yvKBxjm1yImHG_CrM0kBq_LisSEWN1yycKGeOo&usqp=CAU",
    //     followed: true,
    //     fullName: "Бэйн",
    //     status: "Профессионал",
    //     location: { city: "Gotham", country: "USA" },
    //   },
    //   {
    //     id: 3,
    //     avatar:
    //       "https://i.pinimg.com/736x/6b/8a/ac/6b8aacc0935316d657d6201b17dac6c8.jpg",
    //     followed: false,
    //     fullName: "Веном",
    //     status: "I like pizza",
    //     location: { city: "San-Francisco", country: "USA" },
    //   },
    // ]

  ],
  pageSize: 3,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true



}

const usersReducer = (state = initialState, action) => {

     
     switch (action.type) {
       case FOLLOW:
        return {
          ...state,
          users: state.users.map( u => {
            if (u.id === action.userId) {
              return {...u, followed: true}
            } return u
          })
        }
        case UNFOLLOW:
          return {
            ...state,
            users: state.users.map( u => {
              if (u.id === action.userId) {
                return {...u, followed: false}
              } return u
            })
          }
          case SET_USERS:
            return {...state, users:action.users}

          case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

          case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}

          case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

            default:
              return state;
     }

       
}


export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;

