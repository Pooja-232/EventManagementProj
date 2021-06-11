using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BALForEventMgt;

namespace DALForEventMgt
{ 

    public class FeedbackDal
{
    public void authfeed(Feedback f)
    {
        Feedback f1 = new Feedback();
        SqlConnection cn = new SqlConnection("server=DESKTOP-JO0FKH7\\SQLEXPRESS;Integrated Security=true;database=EventManagement");
        SqlCommand cmd = new SqlCommand("insert into Feedback values(" + f.P_feedback + ",'" + f.P_name + " ')", cn);
        cn.Open();


        cmd.ExecuteNonQuery();

        cn.Close();
        
    }
}
}
